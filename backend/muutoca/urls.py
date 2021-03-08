from django.contrib import admin
from django.urls import path
from applications.user.urls import user_api_endpoints

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += user_api_endpoints