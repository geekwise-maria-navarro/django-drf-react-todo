from rest_framework import serializers
from django.contrib.auth.models import User, Group, Permission
from django.contrib.auth import authenticate

class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('name',)
        # fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    groups = PermissionSerializer(many=True)

    class Meta:
        model = User
        # fields = '__all__'
        fields = ('id', 'username', 'email', 'groups')
        
        def created(self, validated_data):
            permissions_data = validated_data.pop('groups')
            user = User.objects.create(**validated_data)
            for permission_data in permissions_data:
                Permission.objects.create(user=user, **permissions_data)
            return user

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
