from django.urls import path, include
from . import views

urlpatterns = [
        path('', views.index, name="system-index" ),
        path('report/', views.report, name="system-report"),
        path("__reload__/", include("django_browser_reload.urls")),
]

