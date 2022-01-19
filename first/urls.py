from django.urls import path
from django.views.generic import TemplateView
from .views import base
app_name='first'

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'first/home.html'), name="home"),
    path('counter', TemplateView.as_view(template_name='first/1.html'), name="counter"),
    path('calc', TemplateView.as_view(template_name='first/calculator.html'), name= "calc")
]