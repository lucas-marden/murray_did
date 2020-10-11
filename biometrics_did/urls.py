from django.urls import path

from . import views

urlpatterns = [
    path('medic', views.medic, name='medic'),
    path('team_lead', views.team_lead, name='team_lead'),
]
