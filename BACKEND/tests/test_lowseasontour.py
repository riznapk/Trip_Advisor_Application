import unittest
from lowseasontour import LowSeasonTour


class TestLowSeasonTour(unittest.TestCase):

    def setUp(self):
        self.tour = LowSeasonTour()

    def test_set_tour_id(self):
        self.tour.set_tour_id(1)
        self.assertEqual(self.tour.get_tour_id(), 1)

    def test_set_tour_name(self):
        self.tour.set_tour_name("Low Season Tour")
        self.assertEqual(self.tour.get_tour_name(), "Low Season Tour")

    def test_set_tour_destination(self):
        self.tour.set_tour_destination("Beach")
        self.assertEqual(self.tour.get_tour_destination(), "Beach")

    def test_set_tour_description(self):
        self.tour.set_tour_description("A tour during the low season")
        self.assertEqual(self.tour.get_tour_description(), "A tour during the low season")

    def test_set_tour_price(self):
        self.tour.set_tour_price(100)
        self.assertEqual(self.tour.get_tour_price(), 100)

    def test_set_tour_image(self):
        self.tour.set_tour_image("low_season_tour.jpg")
        self.assertEqual(self.tour.get_tour_image(), "low_season_tour.jpg")

    def test_set_tour_guide(self):
        self.tour.set_tour_guide("John Doe")
        self.assertEqual(self.tour.get_tour_guide(), "John Doe")

    def test_set_tour_availability(self):
        self.tour.set_tour_availability(True)
        self.assertEqual(self.tour.get_tour_availability(), True)

    def test_set_service_charge(self):
        self.tour.set_service_charge(150)
        self.assertEqual(self.tour.get_service_charge(), 150)

    def test_seasonal_price_calculation(self):
        self.assertEqual(self.tour.seasonal_price_calculation(2, 50), 200)


if __name__ == '__main__':
    unittest.main()
