from django.db import models
from django.contrib.auth import authenticate, login


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
    product_options = models.CharField(max_length=120)

    def __str__(self):
        return self.branch
