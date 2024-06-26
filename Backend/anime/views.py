from urllib.parse import unquote
from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import json

from .models import Anime



class SidePanelView(APIView):
    def get(self, request):
        last_five_updated_anime = [i for i in Anime.objects.order_by("date_of_change")][-5:]
        output = [
            {
                'id': anime.id,
                'title': anime.title,
                'description': anime.description[:100],
                'episodes_number': anime.episodes_number,
                'image': unquote(anime.cover_image.url),
            } for anime in last_five_updated_anime
        ]
        return Response(output)

class ReleaseView(APIView):
    def get(self, request):
        output = [
            {
                'id': anime.id,
                'title': anime.title,
                'description': anime.description,
                'episodes_number': anime.episodes_number,
                'image': unquote(anime.cover_image.url),
                'favorites_count': anime.favorites_count,
            } for anime in Anime.objects.all()
        ]
        output.sort(key=lambda x: -x['favorites_count'])
        return Response(output)


class ScheduleView(APIView):
    def get(self, request):
        weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

        output = {
            day: [
                {
                    'id': anime.id,
                    'title': anime.title,
                    'description': anime.description[:80],
                    'episodes_number': anime.episodes_number,
                    'image': unquote(anime.cover_image.url),
                }
                for anime in Anime.objects.filter(new_episode_every=day)
            ] for day in weekdays
        }
        return Response(output)


class FilterView(APIView):
    def get(self, request):
        # It's supposed that get request is of form
        # localhost: 8000 / release / filter?data = {
        #     "genres": [genre1, genre2, ...] or null,
        #     "year": int or null,
        #     "season": "winter" or "summer" or "autumn" or "spring" or null,
        #     "popular_or_new": "popular", "new", null,
        #     "is_completed": true or null,  Logic for false is not exist
        # }

        anime_infos = [
            {
                'id': anime.id,
                'title': anime.title,
                'description': anime.description,
                'episodes_number': anime.episodes_number,
                'genres': [i.name for i in anime.genres.all()],
                'year': anime.year,
                'season': anime.season,
                'image': unquote(anime.cover_image.url),
                'favorites_count': anime.favorites_count,
                'date_of_change': anime.date_of_change,
                'status': anime.status,

            } for anime in Anime.objects.all()
        ]
        
        req_data = unquote(request.GET.get('data'))
        req_data = json.loads(req_data)

        if req_data['genres'] is not None:
            result = []
            for anime in anime_infos:
                if all([i in anime['genres'] for i in req_data['genres']]):
                    result.append(anime)
            anime_infos = result
        if req_data['year'] is not None:
            anime_infos = [anime for anime in anime_infos if anime['year'] == req_data['year']]
        if req_data['season'] is not None:
            anime_infos = [anime for anime in anime_infos if anime['season'] == req_data['season']]

        if req_data['popular_or_new'] == 'popular':
            anime_infos.sort(key=lambda x: x['favorites_count'], reverse=True)
        elif req_data['popular_or_new'] == 'new':
            anime_infos.sort(key=lambda x: x['date_of_change'], reverse=True)

        if req_data['is_completed'] == True:
            anime_infos = [anime for anime in anime_infos if anime['status'] == 'completed']

        anime_infos = [
            {
                'id': anime['id'],
                'title': anime['title'],
                'description': anime['description'],
                'episodes_number': anime['episodes_number'],
                'image': anime['image'],
             } for anime in anime_infos
        ]

        return Response(anime_infos)

