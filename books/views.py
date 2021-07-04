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