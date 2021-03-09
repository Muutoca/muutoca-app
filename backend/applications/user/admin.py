from django.contrib import admin
from django.contrib.auth import admin as custom_admin

from .forms import UserChangeForm, UserCreationForm
from .models import User

@admin.register(User)
class UserAdmin(custom_admin.UserAdmin):
  form = UserChangeForm
  add_form = UserCreationForm
  model = User
  fieldsets = custom_admin.UserAdmin.fieldsets + (
    ("User custom fields", {"fields": ("ein_number",
                                       "address_latitude",
                                       "address_longitude",
                                       "address_zipcode",
                                       "address_1",
                                       "address_2",
                                       "address_number",
                                       "address_city",
                                       "address_state",
                                       "address_country",
                                       "address_neighborhood",
                                       "is_deliveryman",
                                       "has_business",
                                       "accepted_the_terms",
                                      )
                            }
    ),
  )