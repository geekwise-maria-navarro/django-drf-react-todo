from django.db import models
from django.contrib.auth.models import user



# Create your models here.

class BranchApp(models.Model):
    branch = models.CharField(max_length=120)
    customer = models.CharField(max_length=120)
    product_options = models.CharField(max_length=120)

    def __str__(self):
        return self.customer