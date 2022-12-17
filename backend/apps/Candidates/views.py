from django.db.models import Q, Exists, OuterRef

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.tokens import RefreshToken

from apps.Auth.models import User
from . import serializers
from .models import Candidates, Abilities, PurchasedOffers
from apps.Favourites.models import FavouriteCandidates

class CandidateView(generics.GenericAPIView):
    serializer_class = serializers.CandidateSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        u = self.request.GET.get('u')
        slug=self.kwargs['slug']
        id=self.kwargs['pk']

        candidate = (Candidates.objects
            .filter(Q(is_verified=True) & Q(slug=slug) & Q(id=id))
            .annotate(is_purchased=Exists(PurchasedOffers.objects.filter(employer=u, candidate_id=OuterRef('pk')))))

        if candidate.filter(is_purchased=True):
            return candidate
        
        return Response(candidate.values('id', 'first_name', 'last_name', 'is_purchased'))


class CandidateAddView(generics.CreateAPIView):
    serializer_class = serializers.CandidateAddSerializer


class OffersView(generics.ListAPIView):
    serializer_class = serializers.SearchCandidateSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        u = self.request.GET.get('u')

        queries = Q(is_verified=True)

        return (Candidates.objects
            .filter(queries)
            .annotate(is_purchased=Exists(PurchasedOffers.objects.filter(employer=u, candidate_id=OuterRef('pk'))))
            .filter(is_purchased=False)
            .annotate(favourite=Exists(FavouriteCandidates.objects.filter(employer=u, candidate_id=OuterRef('pk')))))
        
class AbilitiesView(APIView):
    def get(self, request):
        abilities = Abilities.objects.all().order_by('name').distinct('name')
        abilities_list = []
        for x in abilities:
            abilities_list.append(x.name)

        data = {
            'abilities': abilities_list,
        }

        return Response(data)

class SearchCandidateView(generics.ListAPIView):
    serializer_class = serializers.SearchCandidateSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        q = self.request.GET.get('q')
        a = self.request.GET.get('a')
        u = self.request.GET.get('u')
        queries = Q(is_verified=True)

        if q:
            query=Q()
            for x in q.split():
                query &= Q(slug__icontains=x)
            queries.add(Q(query), Q.AND)

        if a:     
            s = a.split(',')
            queries.add(Q(candidateabilities_candidate__ability__name__in=s), Q.AND)
        
        return (Candidates.objects
            .filter(queries)
            .annotate(is_purchased=Exists(PurchasedOffers.objects.filter(employer=u, candidate_id=OuterRef('pk'))))
            .filter(is_purchased=False)
            .annotate(favourite=Exists(FavouriteCandidates.objects.filter(employer=u, candidate_id=OuterRef('pk')))))

class PurchaseOfferView(generics.GenericAPIView):
    serializer_class = serializers.PurchaseOfferSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid()
        serializer.save()
        id = serializer.data['employer']
        user = User.objects.get(id=id)

        token = RefreshToken.for_user(user)
        token['id'] = user.id
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        token['nip'] = user.nip
        token['points'] = int(user.points)
        token['is_staff'] = user.is_staff
        
        return Response({'refresh': str(token),'access': str(token.access_token)})
        

class PurchasedOffersView(generics.ListAPIView):
    serializer_class = serializers.CandidateSerializer
    def get_queryset(self):
        u = self.request.GET.get('u')
        return Candidates.objects.filter(purchasedoffers_candidate__employer_id=u)
        