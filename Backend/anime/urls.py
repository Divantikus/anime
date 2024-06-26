from django.urls import path
from .views import SidePanelView, ReleaseView, ScheduleView, FilterView


urlpatterns = [
    path('', ReleaseView.as_view()),
    path('side_panel/', SidePanelView.as_view(), name='side_panel'),
    path('schedule/', ScheduleView.as_view(), name='schedule'),
    path('filter/', FilterView.as_view(), name='filter'),
]