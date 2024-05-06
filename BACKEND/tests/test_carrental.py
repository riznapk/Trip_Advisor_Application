import unittest
from transportation import Transportation
from carrental import CarRental


class TestCarRental(unittest.TestCase):

    def test_car_rental_instance(self):
        car_rental = CarRental()
        self.assertIsInstance(car_rental, Transportation)
        self.assertIsInstance(car_rental, CarRental)

    def test_get_total_price(self):
        car_rental = CarRental()
        car_rental.set_rental_price(50)
        self.assertEqual(car_rental.get_total_price(3, 5), 750)

    def test_get_set_methods(self):
        car_rental = CarRental()
        car_rental.set_travel_id("GYUOP001")
        self.assertEqual(car_rental.get_travel_id(), "GYUOP001")

        car_rental.set_travel_type("car")
        self.assertEqual(car_rental.get_travel_type(), "car")

        car_rental.set_rental_price(250)
        self.assertEqual(car_rental.get_rental_price(), 250)

        car_rental.set_travel_price(200)
        self.assertEqual(car_rental.get_travel_price(), 200)


if __name__ == '__main__':
    unittest.main()
