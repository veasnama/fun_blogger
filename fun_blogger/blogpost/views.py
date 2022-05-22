# from django.shortcuts import render
from django.urls import reverse
# Create your views here.
from django.http import HttpResponse, Http404
from django.template import loader
from django.shortcuts import get_object_or_404, render
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

    user = User.objects.order_by('-pub_date')[:3]
    try:
        print(user)
    except User.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "blogpost/details.html", {'user': user[blog_id]})
def comments(request, blog_id):
    return HttpResponse("You're commenting at the blog %s." % blog_id)


