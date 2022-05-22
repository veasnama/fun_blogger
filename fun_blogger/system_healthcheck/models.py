from django.db import models

# Create your models here.

class User(models.Model):

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=200)
    is_admin = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date created')

    def __str__(self):
        return self.username

