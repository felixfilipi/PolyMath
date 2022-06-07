from posixpath import basename
from django.urls import path, include
from .views import HomeViewSet, HistoryViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('home', HomeViewSet, basename='home')
router.register('history', HistoryViewSet, basename='history')
urlpatterns = [
    path('', include(router.urls))
]
