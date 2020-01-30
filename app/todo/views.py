from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import Bank_Serializer, Customer_Serializer, Account_Serializer
from .models import BranchApp, Customer, Account

# Create your views here.

class BankView(viewsets.ModelViewSet):
    serializer_class = Bank_Serializer
    queryset = BranchApp.objects.all()

class CustomerView(viewsets.ModelViewSet):
    serializer_class = Customer_Serializer
    queryset = Customer.objects.all()

# class AccountView(viewsets.ModelViewSet):
#     serializer_class = Account_Serializer
#     queryset = Account.objects.all()

class AccountView(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Account_Serializer

    def get_queryset(self):
        return self.request.user.holders.all()

    def perform_create(self, serializer):
        serializer.save(holder=self.request.user)
