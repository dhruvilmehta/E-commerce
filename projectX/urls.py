"""projectX URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from books.api.views import payment_view
from profiles.views import profile_view
from books.views import bookdetail_view, cart_view, checkout_view, home_view, login_view, logout_view, orders_view, search_view, yourbooks_view
from django.contrib import admin
from django.urls import path
from django.urls.conf import include, re_path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

from django.views.static import serve
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home_view),
    path('cart/',home_view),
    path('orders/',home_view),
    path('ownedBooks',home_view),
    # path('<str:bookname>/detail',home_view),
    re_path(r'.*/detail',home_view),
    path('login/',home_view),
    path('logout/',home_view),
    path('profile/',home_view),
    path('checkout/',home_view),
    re_path(r'search/query=.*',home_view),
    path('api/books/',include('books.api.urls')),
    path('api/profile/',include('profiles.api.urls')),
    path('payment/',payment_view),
    # re_path(r'.*',home_view),
    # path('cart/',cart_view),
    # path('orders/',orders_view),
    # path('ownedBooks/',yourbooks_view),
    # path('<str:bookname>/detail/',bookdetail_view),
    # path('login/',login_view),
    # path('logout/',logout_view),
    # path('profile/',profile_view),
    # path('checkout/',checkout_view),
    # path('search/',search_view),
    path('auth/',obtain_auth_token),
    url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}), 
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)