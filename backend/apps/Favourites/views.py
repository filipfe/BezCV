from django.db.models import Q

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from . import serializers
from .models import FavouriteCandidates
from apps.Candidates.models import Candidates

class FavouriteCandidatesView(generics.ListAPIView):
    serializer_class = serializers.FavouriteCandidatesSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.GET.get('u')
        return Candidates.objects.filter(favouritecandidates_candidate__employer_id=user)


class AddToFavouritesView(generics.CreateAPIView):
    serializer_class = serializers.FavouriteOffersSerializer


class RemoveFromFavouritesView(generics.DestroyAPIView):
    serializer_class = serializers.FavouriteOffersSerializer

    def destroy(self, request, *args, **kwargs):
        u = self.kwargs['u']
        c = self.kwargs['c']
        favourite = FavouriteCandidates.objects.get(Q(employer=u) & Q(candidate=c))
        favourite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)