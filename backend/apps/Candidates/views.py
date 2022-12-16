from django.db.models import Q, Exists

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from . import serializers
from .models import Candidates, Abilities, PurchasedOffers

class CandidateView(generics.RetrieveAPIView):
    queryset = Candidates.objects.filter(is_verified=True)
    serializer_class = serializers.CandidateSerializer
    lookup_field = 'slug'

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
            .annotate(is_purchased=Exists(PurchasedOffers.objects.filter(employer=u)))
            .filter(is_purchased=False))
        

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
            a.split(',')
            queries.add(Q(candidateabilities_candidate__ability__name__in=a), Q.AND)
        
        return (Candidates.objects
            .filter(queries)
            .annotate(is_purchased=Exists(PurchasedOffers.objects.filter(employer=u)))
            .filter(is_purchased=False))

class PurchaseOfferView(generics.CreateAPIView):
    serializer_class = serializers.PurchaseOfferSerializer