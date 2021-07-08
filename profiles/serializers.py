from rest_framework import serializers
from .models import Profile
from books.serializers import BookSerializer, OrderedBooksSerializer, UserSerializer,OwnedBooksSerializer
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    # ownedbooks_set=OwnedBooksSerializer(many=True,read_only=True)
    # booksordered_set=OrderedBooksSerializer(many=True,read_only=True)
    address=serializers.SerializerMethodField(read_only=True)
    mobilenumber=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['username','first_name','last_name','address','mobilenumber'] #'ownedbooks_set','booksordered_set'

    def get_address(self,obj):
        return obj.profile.address

    def get_mobilenumber(self,obj):
        return obj.profile.mobilenumber