from books.serializers import SerializerAll
from rest_framework.response import Response
from profiles.serializers import ProfileSerializer
from profiles.models import Profile
from rest_framework.decorators import api_view, authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def profile_detail_api_view(request):
    user=request.user
    if request.method=="POST":
        '''
        {"address":"","mobilenumber":859879834}
        '''
        data=request.data
        profileobj=Profile.objects.get(user=user)
        profileobj.address=data.get("address")
        profileobj.mobilenumber=data.get("mobilenumber")
        profileobj.save()
        
    serializer=ProfileSerializer(user)
    return Response(serializer.data,status=200)