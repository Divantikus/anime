from rest_framework.response import Response
from rest_framework.views import APIView
from .models import YouTubeVideo
from .serializer import YouTubeVideoSerializer


class YouTubeVideoView(APIView):
    @staticmethod
    def get(request):
        videos = YouTubeVideo.objects.all()
        output = [
            {
                'id': output.id,
                'title': output.title,
                'url': output.url,
                'image': output.image.url,

            } for output in videos
        ]
        return Response(output)

    @staticmethod
    def post(request):
        serializer = YouTubeVideoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


