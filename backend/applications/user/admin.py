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
    ("User custom fields", {"fields": ("ein",)}),
  )