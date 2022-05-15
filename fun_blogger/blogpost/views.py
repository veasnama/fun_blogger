# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from .models import User
def index(request):
    latest_added_users = User.objects.order_by('-pub_date')[:3] 
    template = loader.get_template('blogpost/index.html')
    context = {

            'latest_added_users': latest_added_users,
    }
    return HttpResponse(template.render(context, request))

def home_page(request):
    respone =  "What are you looking at now , this is Djanog HomePage"
    return HttpResponse(respone)

def details(request, blog_id):
    return HttpResponse("You're looking at blog  %s." % blog_id)

def comments(request, blog_id):
    return HttpResponse("You're commenting at the blog %s." % blog_id)


