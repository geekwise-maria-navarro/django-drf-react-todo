from django.db import models



# Create your models here.

class Bank_App(models.Model):
    branch = models.CharField(max_length=120)
    customer = models.CharField(max_length=120)
    product_options = models.CharField(max_length=120)

    def __str__(self):
        return self.customer