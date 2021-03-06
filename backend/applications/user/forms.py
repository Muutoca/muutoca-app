from django.contrib.auth import forms

from .models import User

class UserChangeForm(forms.UserChangeForm):
  class Meta(forms.UserChangeForm.Meta):
    model = User
    fields = '__all__'


class UserCreationForm(forms.UserCreationForm):
  class Meta(forms.UserCreationForm):
    model = User
    fields = '__all__'