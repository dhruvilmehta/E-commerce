from books.serializers import SerializerAll
from rest_framework.response import Response
from profiles.serializers import ProfileSerializer
from profiles.models import Profile
from rest_framework.decorators import api_view, authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_detail_api_view(request):
    user=request.user
    qs=User.objects.filter(username=user)
    serializer=ProfileSerializer(qs,many=True)
    return Response(serializer.data,status=200)