from rest_framework import serializers
from .models import UploadedNote

class UploadedNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedNote
        fields = '__all__'
