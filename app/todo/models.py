from django.db import models


# Create your models here.

class BranchApp(models.Model):
    branch = models.CharField(max_length=120)
    address = models.CharField(max_length=120)
    product_options = models.CharField(max_length=120)

    def __str__(self):
        return self.branch