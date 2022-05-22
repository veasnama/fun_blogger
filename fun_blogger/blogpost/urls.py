from django.urls import path, include
from . import views
urlpatterns = [
        path('', views.index, name='index'),
        path('specific/<int:blog_id>/', views.details, name='detail'),
        path('<int:blog_id>/comments/', views.comments, name='comments'),
        path('home_page/', views.home_page, name='home_page'),
]


