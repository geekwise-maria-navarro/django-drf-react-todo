from django.db import models



# Create your models here.

class Bank_App(models.Model):
    branch = models.CharField(max_length=120)
    customer = models.TextField()
    product_options = models.BooleanField(default=False)

    def __str__(self):
        return self.customer