"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.static import serve

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.index),
    path('kontakt', views.index),
    path('rejestracja', views.index),
    path('logowanie', views.index),
    path('rejestracja/verify', views.index),
    path('logowanie/reset-password', views.index),
    path('logowanie/reset-password/confirm', views.index),
    path('oferty', views.index),
    path('oferty/search', views.index),
    path('oferty/<id>', views.candidates),
    path('punkty', views.index),
    path('punkty/podsumowanie', views.index),
    path('profil', views.index),
    path('administracja', views.index),
    path('ankieta', views.index),
    path('docs/regulamin', views.index),
    path('docs/polityka-prywatnosci', views.index),

    path('api/', include('apps.Auth.urls')),
    path('api/', include('apps.Contact.urls')),
    path('api/', include('apps.Candidates.urls')),
    path('api/', include('apps.Favourites.urls')),
    path('api/', include('apps.Points.urls')),
    path('api/', include('apps.Survey.urls')),
    path('api/', include('apps.Codes.urls')),
]
