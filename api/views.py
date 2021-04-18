from django.shortcuts import render
from .serializers import TaskSerializer
from django.http import JsonResponse

# Create your views here.


def apiOverview(request):
    return JsonResponse("api base point", safe=False)
