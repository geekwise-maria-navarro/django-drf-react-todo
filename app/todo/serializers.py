from rest_framework import serializers
from .models import BranchApp


class Bank_Serializer(serializers.ModelSerializer):
    class Meta:
        model = BranchApp
        fields = ('id', 'branch', 'customer', 'product_options')
