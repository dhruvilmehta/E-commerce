from rest_framework import serializers
from .models import Books, BooksOrdered, BooksReturned, OwnedBooks, UserCart
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Books
        fields=['id','name','price','type','available']

class ReturnedBooksSerializer(serializers.ModelSerializer):
    class Meta:
        model=BooksReturned
        fields=['orderid','returndate','returnamount','returned']

class OwnedBooksSerializer(serializers.ModelSerializer):
    book=BookSerializer(read_only=True)
    returndate=serializers.SerializerMethodField(read_only=True)
    returnamount=serializers.SerializerMethodField(read_only=True)

    class Meta: 
        model=OwnedBooks
        fields=['orderid','book','duration','ownerfrom','expiry','returnamount','returndate']

    def get_returndate(self,obj):
        try:
            return obj.book.booksreturned_set.get(orderid=obj.orderid).returndate
        except:
            return None

    def get_returnamount(self,obj):
        try:
            return obj.book.booksreturned_set.get(orderid=obj.orderid).returnamount
        except:
            return None

    

class UserSerializer(serializers.ModelSerializer):
    ownedbooks_set=OwnedBooksSerializer(read_only=True)
    class Meta:
        model=User
        fields=['id','username','first_name','last_name','ownedbooks_set']

class UserSerializer2(serializers.ModelSerializer):
    # ownedbooks_set=OwnedBooksSerializer(read_only=True)
    class Meta:
        model=User
        fields=['id','username','first_name','last_name']

class OwnedBooksSerializer2(serializers.ModelSerializer):
    user=UserSerializer2(read_only=True)
    # user=UserSerializer(read_only=True)
    class Meta:
        model=OwnedBooks
        fields=['orderid','user','duration','ownerfrom','returnvalue']


class OrderedBooksSerializer(serializers.ModelSerializer):
    # user=UserSerializer(read_only=True)
    book=BookSerializer(read_only=True)
    class Meta:
        model=BooksOrdered
        fields=['id','book','duration','deliveryDate','returndate']

class CartSerializer(serializers.ModelSerializer):
    book=BookSerializer(read_only=True)
    class Meta:
        model=UserCart
        fields=['book']
        
class SerializerAll(serializers.ModelSerializer):
    ownedbooks_set=OwnedBooksSerializer(many=True,read_only=True)
    booksordered_set=OrderedBooksSerializer(many=True,read_only=True)
    usercart_set=CartSerializer(read_only=True,many=True)
    class Meta:
        model=User
        fields=['id','username','first_name','last_name','password','ownedbooks_set','booksordered_set','usercart_set']

    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class BooksDetailSerializer(serializers.ModelSerializer):
    # users=UserSerializer(read_only=True,many=True)
    ownedbooks_set=OwnedBooksSerializer2(many=True,read_only=True)
    class Meta:
        model=Books
        fields=['id','name','price','type','available','stock','ownedbooks_set']


class UserCartSerializer(serializers.ModelSerializer):
    # user=UserSerializer(read_only=True)
    usercart_set=CartSerializer(read_only=True,many=True)
    class Meta:
        model=User
        fields=['username','usercart_set']