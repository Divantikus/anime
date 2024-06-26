from django.urls import path
from .views import YouTubeVideoView


urlpatterns = [
    path('main_page_videos', YouTubeVideoView.as_view(), name='main_page_videos'),
]
