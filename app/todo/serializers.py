from rest_framework import serializers
from .models import Bank_App


class Bank_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Bank_App
        fields = ('id', 'branch', 'customer', 'product_options')
