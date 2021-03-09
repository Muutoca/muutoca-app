from django.conf.urls import url, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

user_api_endpoints = [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/v1/refresh-token/', TokenRefreshView.as_view(), name='token_refresh'),
]