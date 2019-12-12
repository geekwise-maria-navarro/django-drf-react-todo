from django.contrib import admin
from .models import Branch, Customer, Product
    

# class TodoAdmin(admin.ModelAdmin):
#     list_display = ('title', 'description', 'completed')


# # Register your models here.
# admin.site.register(Todo, TodoAdmin)

# admin.site.register(Branch)
admin.site.register(Customer)
admin.site.register(Product)

class Customer_Inline(admin.StackedInline):
    model = Customer
@admin.register(Branch)
class Branch_Admin(admin.ModelAdmin):
    inlines = [
        Customer_Inline
    ]