from django.urls import path
from .views import test_endpoint

urlpatterns = [
    path('your-endpoint/', test_endpoint),
]
