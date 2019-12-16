from django.contrib import admin
from .models import Bank_App


class BankAdmin(admin.ModelAdmin):
    list_display = ('branch', 'customer', 'product_options')



# Register your models here.
admin.site.register(Bank_App, BankAdmin)