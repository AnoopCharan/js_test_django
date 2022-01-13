from django.urls import path
from django.views.generic import TemplateView
from .views import base
app_name='first'

urlpatterns = [
    path('', TemplateView.as_view(template_name='first/1.html')),
]