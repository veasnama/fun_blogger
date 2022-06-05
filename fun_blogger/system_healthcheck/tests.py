from django.test import TestCase
from .models import User 
# Create your tests here.
class UserModelsTest(TestCase):

    def test_username_valid(self):
        current_user = "Destiny"
        for u in User.objects.all():
            print(u.username)
        
        self.assertIs(current_user, "Vannak")

