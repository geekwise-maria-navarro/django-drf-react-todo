from rest_framework import serializers
from .models import Branch


class Bank_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ('id', 'branch', 'customer', 'product_options')
