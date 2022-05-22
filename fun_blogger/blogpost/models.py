from django.db import models
from django.utils import timezone
# Create your models here.
class User(models.Model):

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=200)
    user_role = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date created')

    def __str__(self):
        return self.username

class Blog(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    owner = models.CharField(max_length=100)
    tilte = models.CharField(max_length=1000)
    content = models.CharField(max_length=15000)
    created_at = models.DateTimeField('date created')
    pub_date = models.CharField(max_length=100)

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.owner 
    

