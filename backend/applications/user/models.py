from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    address_latitude = models.FloatField()
    address_longitude = models.FloatField()
    address_zipcode = models.CharField(max_length=15)
    address_1 = models.CharField(max_length=150)
    address_2 = models.CharField(max_length=100)
    address_number = models.CharField(max_length=20)
    address_city = models.CharField(max_length=30)
    address_state = models.CharField(max_length=2)
    address_country = models.CharField(max_length=20)
    address_neighborhood = models.CharField(max_length=50)
    ein = models.IntegerField(max_length=30)
    is_deliveryman = models.BooleanField(default=False)
    has_business = models.BooleanField(default=False)
    accepted_the_terms = models.BooleanField(default=False) 