from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Bank_Serializer, Customer_Serializer, Account_Serializer
from .models import BranchApp, Customer, Account

# Create your views here.

class BankView(viewsets.ModelViewSet):
    serializer_class = Bank_Serializer
    queryset = BranchApp.objects.all()

class CustomerView(viewsets.ModelViewSet):
    serializer_class = Customer_Serializer
    queryset = Customer.objects.all()

class AccountView(viewsets.ModelViewSet):
    serializer_class = Account_Serializer
    queryset = Account.objects.all()


