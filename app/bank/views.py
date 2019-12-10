from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Branch_Serializer, Customer_Serializer, Product_Serializer
from .models import Branch, Customer, Product

# Create your views here.


class BranchView(viewsets.ModelViewSet):
    serializer_class = Branch_Serializer
    queryset = Branch.objects.all()

class CustomerView(viewsets.ModelViewSet):
    serializer_class = Customer_Serializer
    queryset = Customer.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = Product_Serializer
    queryset = Product.objects.all()