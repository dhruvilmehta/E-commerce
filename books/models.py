from django.db import models
from django.conf import settings
from datetime import date, timedelta
from dateutil.relativedelta import relativedelta
from django.db.models.signals import post_save, pre_save
# Create your models here.

User=settings.AUTH_USER_MODEL

class Books(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField(default=0)
    type=models.CharField(max_length=15)
    available=models.BooleanField(default=True)
    stock=models.IntegerField(default=0)
    users=models.ManyToManyField(User,blank=True)
    photo=models.ImageField(blank=True)

    def __str__(self):
        return self.name

class UserCart(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class OwnedBooks(models.Model):
    orderid=models.IntegerField(default=0)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)
    duration=models.IntegerField(null=True,blank=True)
    ownerfrom=models.DateField(null=True,blank=True)
    expiry=models.DateField(null=True,blank=True)
    returnvalue=models.IntegerField(null=True,blank=True)

    # def __str__(self):
    #     return self.user.username

class BooksOrdered(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)
    duration=models.IntegerField(null=True,blank=True)
    deliveryDate=models.DateField(null=True,blank=True)
    returndate=models.DateField(null=True,blank=True)
    delivered=models.BooleanField(default=False)

    # def __str__(self):
    #     return self.user.username

    # def returndateinit(self):
    #     # return self.deliveryDate+timedelta(days=180)
    #     return self.deliveryDate+relativedelta(months=6)

class BooksReturned(models.Model):
    orderid=models.IntegerField(default=0)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)
    returndate=models.DateField()
    returnamount=models.IntegerField()
    returned=models.BooleanField(default=False)

class OwnersHistory(models.Model):
    orderid=models.IntegerField(default=0)
    book=models.ForeignKey(Books,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    bookedon=models.DateField(default=None,null=True)
    deliveredon=models.DateField(default=None,null=True)
    returnedoninit=models.DateField(default=None,null=True)
    returnedon=models.DateField(default=None,null=True)
    

def orderedbookspostsave(sender,instance,created,**kwargs):
    user=instance.user
    book=instance.book
    orderid=instance.id
    if created:
        obj=OwnersHistory.objects.create(bookedon=date.today(),orderid=orderid,book=book,user=user)
        obj.save()
        ownedbookqs=OwnedBooks.objects.create(orderid=orderid,user=user,book=book,ownerfrom=instance.deliveryDate)
        ownedbookqs.save()
    historyobj=OwnersHistory.objects.filter(orderid=orderid,book=book,user=user).first()
    historyobj.deliveredon=instance.deliveryDate
    historyobj.save()
    ownedbooksobj=OwnedBooks.objects.filter(orderid=orderid).first()
    ownedbooksobj.ownerfrom=instance.deliveryDate
    ownedbooksobj.save()
    delivered=instance.delivered
    if delivered:
        historyobj.deliveredon=date.today()
        historyobj.save()
        ownedbooksobj.ownerfrom=date.today()
        ownedbooksobj.save()
        instance.delete()

def returnedbookspostsave(sender,instance,created,**kwargs):
    user=instance.user
    book=instance.book
    if created:
        obj=OwnersHistory.objects.filter(orderid=instance.orderid,book=book,user=user).first()
        obj.returnedoninit=date.today()
        obj.save()
    historyobj=OwnersHistory.objects.filter(orderid=instance.orderid,book=book,user=user).first()
    historyobj.returnedon=instance.returndate
    historyobj.save()
    returned=instance.returned
    if returned:
        historyobj.returnedon=date.today()
        historyobj.save()
        ownedbook=OwnedBooks.objects.filter(orderid=instance.orderid,user=instance.user,book=instance.book).first()
        ownedbook.delete()
        instance.book.users.remove(instance.user)
        instance.delete()

post_save.connect(orderedbookspostsave,sender=BooksOrdered)
post_save.connect(returnedbookspostsave,sender=BooksReturned)
