from django.urls import path
from .views import summarize_file

urlpatterns = [
    path('summarize/', summarize_file),
]
