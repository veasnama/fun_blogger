from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import User
# Create your views here.

def index(request):
    # user = User.objects.all()
    user = "hello, world"    
    # template = loader.get_template('system_healthcheck/index.html')
    context = {'user': user}
    # return HttpResponse(template.render(context, request));
    return render(request, 'system_healthcheck/index.html', context)

def report(request):
    return HttpResponse("This is report views")

