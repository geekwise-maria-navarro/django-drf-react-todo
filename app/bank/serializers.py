from rest_framework import serializers
from .models import Branch, Customer, Product



class Branch_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = (
            'branch_name',
            'branch_location'
        )

class Customer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = (
            'customer_name',
            'customer_email'
        )

class Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'product_options'
        )
