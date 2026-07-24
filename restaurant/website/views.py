from django.shortcuts import render ,redirect
from django.http import HttpResponse
from django.views import View

# Create your views here.
def home(request):
    return render(request,'home.html')

def index(request):
    return redirect('home')

def about(request):
    return render(request,'about.html')

def page_not_found(request,Exception):
    return render(request,'404.html',status=404)

class MenuView(View):
    def get(self,request):
        return render(request,'menu.html')

class GalleryView(View):
    def get(self,request):
        return render(request,'gallery.html')

class ContactView(View):
    def get(self,request):
        return render(request,'contact.html')
