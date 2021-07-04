from django.contrib import admin
from .models import Books,BooksOrdered, BooksReturned,OwnersHistory,OwnedBooks, UserCart

# Register your models here.

admin.site.register(Books)
admin.site.register(BooksOrdered)
admin.site.register(OwnersHistory)
admin.site.register(OwnedBooks)
admin.site.register(UserCart)
admin.site.register(BooksReturned)
