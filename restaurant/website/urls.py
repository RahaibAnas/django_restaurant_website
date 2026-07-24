from django.urls import path ,re_path

from . import views

urlpatterns = [
    path("",views.index),
    path("home/",views.home,name="home"),
    path('about/',views.about,name="about"),
    path('menu/',views.MenuView.as_view(),name="menu"),
    path('gallery/',views.GalleryView.as_view(),name="gallery"),
    path('contact/',views.ContactView.as_view(),name="contact"),

]

handler404 = 'website.views.page_not_found'

