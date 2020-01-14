from django.contrib import admin
from .models import BranchApp, Customer, Account


class BankAdmin(admin.ModelAdmin):
    list_display = ('branch', 'address')

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'customer_email')

class AccountAdmin(admin.ModelAdmin):
    list_display = ('account_options', 'account_owner')


# Register your models here.
admin.site.register(BranchApp, BankAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Account, AccountAdmin)