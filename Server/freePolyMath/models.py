from sre_parse import CATEGORIES
from django.db import models

class CATEGORY_FPM(models.Model):

    CATEGORY = models.CharField(primary_key = True, max_length=50)
    LINK = models.CharField(max_length=300)
    THEME_COLOR = models.CharField(max_length=50)


class HISTORY_FPM(models.Model):
    
    CATEGORY = models.CharField(primary_key = True, max_length=50)
    LINK = models.CharField(max_length=300)
    THEME_COLOR = models.CharField(max_length=50)
