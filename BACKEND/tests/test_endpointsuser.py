import unittest
from app import app
import json


class TestEndPointsUser(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_concernpostget(self):
        user = {
            "userID": "RL001",
            "userFirstName": "Rizna",
            "userLastName": "Kunheenkutty",
            "userEmail": "pk.rizna@gmail.com",
            "userPassword": "Rizna",
            "userPhoneNumber": "7867038799",
            "userProfile": "Trip Advisor",
            "userName": "rizna_pk"
        }

        response_post = self.app.post(
            '/users', data=json.dumps(user), content_type='application/json')
        self.assertEqual(response_post.status_code, 200)

        response_get = self.app.get('/users')
        # to get all user details
        self.assertEqual(response_get.status_code, 200)


if __name__ == '__main__':
    unittest.main()
