from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import User
# Create your views here.

def index(request):
    # user = User.objects.all()
    user = "hello, world"    
    template = loader.get_template('system_healthcheck/index.html')
    return HttpResponse(template.render({'user': user}, request))
def report(request):
    return HttpResponse("This is report views")

