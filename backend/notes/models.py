from django.db import models

# Create your models here.

class UploadedNote(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='notes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

