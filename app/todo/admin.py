from django.contrib import admin
from .models import BranchApp


class BankAdmin(admin.ModelAdmin):
    list_display = ('branch', 'customer', 'product_options')



# Register your models here.
admin.site.register(BranchApp, BankAdmin)