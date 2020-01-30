from django.db import models
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


# Create your models here.
def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        ...
    else:
        # Return an 'invalid login' error message.
        ...

class BranchApp(models.Model):
    branch = models.CharField(max_length=120)
    address = models.CharField(max_length=120)

    def __str__(self):
        return self.branch

class Customer(models.Model):
    customer_name = models.CharField(max_length=300)
    customer_email = models.EmailField(max_length=300)

class Account(models.Model):
    account_options = models.CharField(max_length=250)
    account_owner = models.CharField(max_length=250)

    holder = models.ForeignKey(User,
    related_name='holders', on_delete=models.CASCADE,
    null=True,
    )

    def __str__(self):
        return f"{self.account_owner}: {self.holder}"