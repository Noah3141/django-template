from django.db import models

# Create your models here.
from django.db import models

class MyModel(models.Model):
    example = models.CharField(max_length=100)
