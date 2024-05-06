import json
import unittest
from unittest import TestCase

from app import app


class TestEndpoints(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

        # set up some test data
        self.package_data = {
                "packageID": "P098YUEFW42D33I",
                "packageName": "London",
                "packageDuration": "2 hours",
                "packageDescription": "Sightsee at your own pace on a hop-off hop-on cruise on the Thames River, a great way to explore London at your leisure. Embark at one of the central London piers located in Westminster, Waterloo, Tower Bridge, and Greenwich, and travel between London’s top attractions with ease. Opt to remain on board for the entire loop, accompanied by live commentary, or hop on and off as many times as you'd like within the 24-hour validity period.",
                "packageDestination": "London, United Kingdom",
                "packagePrice": "£23.00",
                "packageImage": "https://plus.unsplash.com/premium_photo-1661741567407-406e6b25cd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
                "peopleCount": 4,
                "packageTransportDetails": {
                    "transportID": "TT1234",
                    "transportType": "car",
                    "rentalPrice": 80,
                    "carCount": 2,
                    "dayCount": 3
                },
                "packageAccommodationDetails": {
                    "accID": "ACC123",
                    "accName": "London Marriott Hotel",
                    "accType": "Deluxe Room",
                    "accPrice": 120,
                    "accImage": "https://images.unsplash.com/photo-1578796109401-7a6a41f0800b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxvbmRvbiUyMGhhbGxvdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "accDuration": 3,
                    "accDurationType": "days"
                },
                "packageTourDetails": {
                    "tourID": "T123",
                    "tourName": "London Eye and Thames River Cruise",
                    "tourDestination": "London, United Kingdom",
                    "tourDescription": "Take a ride on the London Eye for breathtaking views of the city skyline, then embark on a relaxing Thames River cruise to see London’s top attractions from the water. Along the way, listen to interesting commentary about the history and culture of London.",
                    "tourPrice": 100,
                    "tourSeason": "high",
                    "tourImage": "https://images.unsplash.com/photo-1600667001184-c4b4f4ce9829?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvbmRvbiUyMGV5ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "tourGuide": "Emma Smith",
                    "tourAvailability": "Available Daily"
                }

        }

        self.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    def tearDown(self):
        pass

    def test_update_package_details(self):
        # insert a test package into the database
        self.app.post('/packageDetails', headers=self.headers, data=json.dumps(self.package_data))

        # update the test package
        update_data = {
            'packageID': '1',
            'packageName': 'New test package name',
            'packageDuration': 'New test package duration'
        }
        response = self.app.put('/packageDetails', headers=self.headers, data=json.dumps(update_data))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['status'], 'Package data with ID: P098YUEFW42D33I is updated!')
        self.assertEqual(response.json['message'], 'success')

        # check if the package was actually updated
        response = self.app.get('/packageDetails/1')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['packageName'], 'New test package name')
        self.assertEqual(response.json['packageDuration'], 'New test package duration')

    def test_update_package_details_bad_request(self):
        # try to update a package with a missing field
        update_data = {
            'packageID': 'P098YUEFW42D33I',
            'packageName': 'New test package name'
        }
        response = self.app.put('/packageDetails', headers=self.headers, data=json.dumps(update_data))
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json['status'], 'Bad Request')
        self.assertEqual(response.json['message'], 'Missing required field(s)')

    def test_update_package_details_not_found(self):
        # try to update a package that does not exist
        update_data = {
            'packageID': '2',
            'packageName': 'New test package name'
        }
        response = self.app.put('/packageDetails', headers=self.headers, data=json.dumps(update_data))
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json['status'], 'Not Found')
        self.assertEqual(response.json['message'], 'Tour package with ID 2 not found')


if __name__ == '__main__':
    unittest.main()
