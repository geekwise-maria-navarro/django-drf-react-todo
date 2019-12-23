"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views
# from bank import views as bank_views


router = routers.DefaultRouter()
router.register(r'todos', views.BankView , 'todo')
# router.register(r'branch', bank_views.BranchView, 'branch')
# router.register(r'customer', bank_views.CustomerView, 'customer')
# router.register(r'product', bank_views.ProductView, 'product')

urlpatterns = [
    path('', admin.site.urls),
    path('admin/', admin.site.urls),
    path('login/', admin.site.urls),
    path('api/', include(router.urls)),
]


# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]