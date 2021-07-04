from django.urls import path
from .views import profile_detail_api_view
urlpatterns = [
    path('',profile_detail_api_view)
]