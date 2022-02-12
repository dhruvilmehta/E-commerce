from django.db.models import query
from django.shortcuts import render


# Create your views here.

def home_view(request):
    return render(request,"pages/home.html")

def cart_view(request):
    return render(request,"pages/cartpage.html")

def orders_view(request):
    return render(request,"pages/currentorders.html")

def yourbooks_view(request):
    return render(request,"pages/yourbooks.html")

def bookdetail_view(request,bookname):
    return render(request,"pages/bookdetail.html",context={"bookname":bookname})

def login_view(request):
    return render(request,"pages/login.html")

def logout_view(request):
    return render(request,"pages/logout.html")

def checkout_view(request):
    return render(request,"pages/checkout.html")

def search_view(request):
    query=request.GET.get("query")
    return render(request,"pages/search.html",context={"query":query})
