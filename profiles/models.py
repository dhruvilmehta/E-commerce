from books.models import OwnedBooks, User
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    address=models.CharField(max_length=150,null=True,blank=True)
    mobilenumber=models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.user.username

def user_did_save(sender,instance,created,*args,**kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)

post_save.connect(user_did_save,sender=User)