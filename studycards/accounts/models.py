from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    bio = models.TextField(null=True, blank=True)
    avatar = models.URLField(max_length=1024, null=True, blank=True)

    def __str__(self):
        return str(self.user)

class Subject(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    title = models.CharField(blank=False, max_length=40)

    def __str__(self):
        return str(self.user)

class Cards(models.Model):
    subject = models.ForeignKey(Subject, null=True, on_delete=models.CASCADE)
    title = models.CharField(blank=False, max_length=40)
    content = models.TextField(blank=True, max_length=2024, null=True)
    color = models.CharField(blank=False, max_length=10)

    def __str__(self):
        return str(self.user)
