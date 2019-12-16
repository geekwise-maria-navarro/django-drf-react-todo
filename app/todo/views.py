from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Bank_Serializer
from .models import Bank_App

# Create your views here.

class BankView(viewsets.ModelViewSet):
    serializer_class = Bank_Serializer
    queryset = Bank_App.objects.all()
