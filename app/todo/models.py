from django.db import models



# Create your models here.

class Branch(models.Model):
    branch = models.CharField(max_length=120)
    customer = models.CharField(max_length=120)
    product_options = models.CharField(max_length=120)

    def __str__(self):
        return self.customer
class Customer(models.Model):
    customer_name = models.CharField(max_length=120)
    