from django.shortcuts import render

# Create your views here.

def base(request):
    render(request, template_name='first/1.html')