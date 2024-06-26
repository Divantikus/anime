from django.db import models
from django.core.validators import FileExtensionValidator
from .constants import SEASON_CHOICES, STATUS_CHOICES, WEEKDAY_CHOICES


class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')

    class Meta:
        db_table = 'genre'
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'
        ordering = ['name']


    def __str__(self):
        return self.name


class Voice(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название')

    class Meta:
        db_table = 'voice'
        verbose_name = 'Озвучка'
        verbose_name_plural = 'Озвучки'
        ordering = ['name']

    def __str__(self):
        return self.name


class Anime(models.Model):
    title = models.CharField(max_length=150, unique=True, verbose_name='Название русское')
    title_latin = models.CharField(max_length=150, unique=True, blank=True, null=True, verbose_name='Название латинское')
    description = models.TextField(blank=True, null=True, verbose_name='Описание')
    year = models.PositiveIntegerField(verbose_name='Год')
    season = models.CharField(max_length=6, choices=SEASON_CHOICES, verbose_name='Сезон')
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, verbose_name='Статус')

    favorites_count = models.PositiveIntegerField(default=0, verbose_name='Количество в избранных')
    new_episode_every = models.CharField(max_length=12, choices=WEEKDAY_CHOICES, blank=True, null=True, verbose_name='Новый эпизод каждую')
    episodes_number = models.PositiveIntegerField(default=0, verbose_name='Количество эпизодов')
    cover_image = models.ImageField(upload_to='covers', blank=True, null=True, verbose_name='Обложка')

    genres = models.ManyToManyField(to=Genre, related_name='animes', verbose_name='Жанры')
    voices = models.ManyToManyField(to=Voice, related_name='animes',  verbose_name='Озвучки')

    # excluded from admin
    date_of_change = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'anime'
        verbose_name = 'Аниме'
        verbose_name_plural = 'Аниме'
        ordering = ['title']


    def __str__(self):
        return self.title


class Episode(models.Model):
    title = models.CharField(max_length=200, unique=True, verbose_name='Название')
    episode_number = models.PositiveIntegerField(verbose_name='Номер серии')
    # video_file = models.FileField(upload_to=, verbose_name='Видео файл')
    print(title, episode_number)
