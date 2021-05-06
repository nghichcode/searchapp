from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings
from . import views

app_name = 'home'
urlpatterns = [
    path('', serve, {'path': 'index.html', 'document_root': settings.FRONTEND_ROOT}),
]
