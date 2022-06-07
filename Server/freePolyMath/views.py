from .models import CATEGORY_FPM, HISTORY_FPM
from .serializers import CategorySerializer, HistorySerializer
from rest_framework import viewsets

class HomeViewSet(viewsets.ModelViewSet):
    queryset = CATEGORY_FPM.objects.all()
    serializer_class = CategorySerializer

class HistoryViewSet(viewsets.ModelViewSet):
    queryset = HISTORY_FPM.objects.all()
    serializer_class = HistorySerializer
