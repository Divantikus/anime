from django.contrib import admin
from anime.models import Genre, Voice, Anime, Episode


@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    exclude = ('date_of_change',)

admin.site.register(Voice)
admin.site.register(Genre)
admin.site.register(Episode)
