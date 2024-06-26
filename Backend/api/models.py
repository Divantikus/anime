from django.db import models


class YouTubeVideo(models.Model):
    title = models.CharField(max_length=150, blank=True, null=True, verbose_name='Название')
    url = models.CharField(max_length=250, unique=True)
    image = models.ImageField(upload_to='youtube_videos', blank=True, null=True, verbose_name='Изображение')

    class Meta:
        db_table = 'youtube_video'
        verbose_name = 'Ютуб видео'
        verbose_name_plural = 'Ютуб видео'

    def __str__(self):
        return self.title


