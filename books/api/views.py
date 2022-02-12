from datetime import date
import datetime
from re import S
from profiles.models import Profile
from rest_framework.decorators import api_view, authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.serializers import Serializer
from books.models import Books, BooksOrdered, BooksReturned, OwnedBooks, UserCart
from rest_framework.response import Response
from books.serializers import BookSerializer, BooksDetailSerializer, OwnedBooksSerializer, SerializerAll, UserCartSerializer, UserSerializer,OrderedBooksSerializer
from django.contrib.auth.models import User
from dateutil.relativedelta import relativedelta
import razorpay

from projectX.settings import RAZORPAY_API_KEY, RAZORPAY_SECRET_KEY

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def books_api_view(request):
    # print("request received at books_api_view")
    query=request.GET.get("query")
    qs=Books.objects.all()
    if query:
        qs=Books.objects.filter(name__icontains=query)
        # print(qs)
        if not qs:
            return Response({"detail":"Not Found"},status=404)
    serializer=BooksDetailSerializer(qs,many=True,context={"request":request})
    return Response(serializer.data,status=200)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def ownedbooks_api_view(request):
    user=request.user
    qs=OwnedBooks.objects.filter(user=user)
    if request.method=='POST':
        '''
        {"action":"Return","detail":[{"orderid": 69},{"orderid": 69}]}
        # {"action":"Return","detail":[{"id":2,"orderid": 69},{"id":3,"orderid": 69}]}
        '''
        data=request.data
        action=data.get("action")
        if action=="Return":
            detail=data.get("detail")
            for item in detail:
                # id=item['id']
                orderid=item['orderid']
                # booksobj=Books.objects.get(id=id)
                # price=booksobj.price
                # orderedbooksobj=BooksOrdered.objects.filter(id=orderid,user=user,book__id=id).first()
                orderedbooksobj=BooksOrdered.objects.filter(id=orderid).first()
                # delivered=orderedbooksobj.delivered
                if orderedbooksobj is None:
                    ownedbooksobj=qs.get(orderid=orderid) #,book__id=id
                    booksobj=ownedbooksobj.book
                    price=booksobj.price
                    booksreturnedobj1=BooksReturned.objects.filter(orderid=orderid,user=user,book=booksobj).first()
                    # if ownedbooksobj.expiry is None:
                    if booksreturnedobj1 is None:
                        ownedbooksobj.expiry=date.today()+relativedelta(days=2)
                        ownerfrom=ownedbooksobj.ownerfrom
                        todaysdate=date.today()
                        r=relativedelta(todaysdate,ownerfrom)
                        # print(r.months)
                        duration=r.months
                        ownedbooksobj.duration=duration
                        if duration<=1:
                            returnamount=price*80/100   # 80% return
                        elif duration>1 and duration<=3:
                            returnamount=price*70/100   # 70% return
                        elif duration>3 and duration<=7:
                            returnamount=price*50/100   # 50% return
                        else:
                            return Response({"detail":"Book Cannot be Returned"},status=403)

                        ownedbooksobj.returnvalue=returnamount
                        ownedbooksobj.save()
                        # qs.get(book__id=id).duration=duration
                        
                        booksreturnedobj=BooksReturned.objects.create(orderid=orderid,user=user,book=booksobj,returndate=todaysdate,returnamount=returnamount)
                        booksreturnedobj.save()
                    else:
                        return Response({"detail":"Book Already Returned"},status=403)
                else:
                    return Response({"detail":"Book Not Delivered"},status=403)
    serializer=OwnedBooksSerializer(qs,many=True)
    return Response(serializer.data,status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ordered_api_view(request):
    user=request.user
    qs=BooksOrdered.objects.filter(user=user)
    serializer=OrderedBooksSerializer(qs,many=True)
    return Response(serializer.data,status=200)

@api_view(['GET','POST'])
def general_api_view(request):
    qs=User.objects.all()
    # print(request.data)
    serializer=SerializerAll(qs,many=True)
    if request.method=="POST":
        serializer=SerializerAll(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            # print(serializer.data)
    return Response(serializer.data,status=200)

# @api_view(['GET'])
# def book_detail_view(request,bookname):
#     qs=Books.objects.filter(name=bookname,available=True)
#     serializer=BooksDetailSerializer(qs,many=True)
#     return Response(serializer.data,status=200)

@api_view(['GET','POST'])
# @permission_classes([IsAuthenticated])
def book_detail_view(request,bookname):
    '''
    {"action":"Buy"}
    '''
    print(bookname)
    qs=Books.objects.filter(name=bookname)
    # qs=qs.first()
    # serializer=BooksDetailSerializer(qs,many=True)
    if request.method=='POST':
        data=request.data
        action=data.get("action")
        user=request.user
        if(action=="Buy"):
            profileqs=Profile.objects.get(user=user)
            if profileqs.address and profileqs.mobilenumber:
            # duration=data.get("duration")
                qs=Books.objects.filter(name=bookname,available=True)
                if not qs:
                    return Response({"detail":"Book Not Available"},status=404)
                # print(qs)
                qs=qs.first()
                if qs.stock !=0:
                    qs.stock=qs.stock-1
                    qs.users.add(user)
                if qs.stock ==0:
                    qs.available=False
                # qs.duration=duration
                qs.save()
                deliverydate=date.today()+relativedelta(days=2)
                # returndate=deliverydate+relativedelta(months=duration)
                books=BooksOrdered.objects.create(user=user,book=qs,deliveryDate=deliverydate)
                books.save()
                serializer=BooksDetailSerializer(qs)
                # returndate=books.returndate
                return Response(serializer.data,status=200)
            else:
                # status 406 = Not Acceptable
                return Response({"detail":"Profile Not Completed"},status=406)
        # serializer=OrderedBooksSerializer(books)
    # print("qs",qs)
    serializer=BooksDetailSerializer(qs,many=True,context={"request":request})
    return Response(serializer.data,status=200)
    

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_cart_view(request):
    # taking id as data
    user=request.user
    if request.method=="POST":
        data=request.data
        id=data.get("id")   # for Adding/Removing items in Cart
        action=data.get("action")
        '''
        {"action":"","id":}
        '''
    
        if action=="Add":
            booksobj=Books.objects.filter(id=id,available=True).first()
            # print(booksobj)
            if not booksobj:
                # print(booksobj)
                return Response({"detail":"Book Not Available"},status=404)
            # booksobj=booksobj.first()
            exists=UserCart.objects.filter(user=user,book=booksobj)
            if exists:
                return Response({"detail":"Book Already exists in your Cart"},status=400)
            cart=UserCart.objects.create(user=user,book=booksobj)
            cart.save()

        if action=="Remove":
            booksobj=Books.objects.get(id=id)
            UserCart.objects.filter(user=user,book=booksobj).delete()
                
        if action=="Buy":
            # {"action":"Buy","detail":[{"id":2},{"id":3}]}
            profileqs=Profile.objects.get(user=user)
            if profileqs.address and profileqs.mobilenumber:
                # print(profileqs.address)
                detail=data.get("detail")
                for item in detail:
                    # print(item['id'],item['duration'])
                    id=item['id']
                    # duration=item['duration']
                    qs=Books.objects.filter(id=id,available=True)
                    qs=qs.first()
                    if qs.stock !=0:
                        qs.stock=qs.stock-1
                        qs.users.add(user)
                    if qs.stock ==0:
                        qs.available=False
                    qs.save()
                    deliverydate=date.today()+relativedelta(days=2)
                    # returndate=deliverydate+relativedelta(months=duration)
                    books=BooksOrdered.objects.create(user=user,book=qs,deliveryDate=deliverydate)
                    # orderid=books.id
                    books.save()
                    # ownedbookqs=OwnedBooks.objects.create(orderid=orderid,user=user,book=qs,ownerfrom=deliverydate)
                    # ownedbookqs.save()
                    UserCart.objects.filter(book__id=id).delete()
            else:
                # status 406 = Not Acceptable
                return Response({"detail":"Profile Not Completed"},status=406)
    # usercart=UserCart.objects.filter(user=user)
    serializer=UserCartSerializer(user,context={"request":request})
    return Response(serializer.data,status=201)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def payment_view(request):
    if request.method=='POST':
        user=request.user

        # for calculating the total price of the books 
        items=UserCart.objects.filter(user=user)
        books=items.values_list('book',flat=True)
        def get_price(id):
            return Books.objects.get(id=id).price
        amount=sum(map(get_price,books))
        receipt=f"{datetime.datetime.now()}"+f"{user.id}"
        # print(receipt)

        client = razorpay.Client(auth=(RAZORPAY_API_KEY,RAZORPAY_SECRET_KEY ))
        DATA = {
            "amount": amount*100,
            "currency": "INR",
            "receipt": receipt,
            "notes": {
                "key1": "value3",
                "key2": "value2"
            }
        }
        response=client.order.create(data=DATA)
        print(response)
        return Response({
            "id":response.get('id'),
            "amount":response.get('amount'),
            "name":user.username,
            "email":user.username+"@gmail.com",
            "contact":"9876543210"
        })
    return Response({})