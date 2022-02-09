from django.shortcuts import render

from base.models import project

# Create your views here.

def homepage(request):
    projects=project.objects.all()
    return render(request,"base\index.html",{"projects":projects})