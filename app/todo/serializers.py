from rest_framework import serializers
from .models import BranchApp, Customer, Account


class Bank_Serializer(serializers.ModelSerializer):
    class Meta:
        model = BranchApp
        fields = ('id', 'branch', 'address')

class Customer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'customer_name', 'customer_email')

class Account_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_options', 'account_owner')
