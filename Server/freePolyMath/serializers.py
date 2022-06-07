from rest_framework import serializers
from .models import CATEGORY_FPM, HISTORY_FPM

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CATEGORY_FPM
        fields = ['CATEGORY', 'LINK', 'THEME_COLOR']

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = HISTORY_FPM
        fields = ['CATEGORY','LINK','THEME_COLOR']
