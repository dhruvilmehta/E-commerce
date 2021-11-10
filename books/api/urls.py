from django.urls import path
from books.api.views import books_api_view, general_api_view,book_detail_view,user_cart_view,ownedbooks_api_view,ordered_api_view

urlpatterns = [
    path('',books_api_view),
    path('owned/',ownedbooks_api_view),
    path('ordered/',ordered_api_view),
    path('cart/',user_cart_view),
    path('<str:bookname>/',book_detail_view),
    # path('<str:bookname>/buy',book_buy_view),
    path('users',general_api_view),
]
