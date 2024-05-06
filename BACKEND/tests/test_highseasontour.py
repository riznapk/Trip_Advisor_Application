import unittest
from highseasontour import HighSeasonTour


class TestHighSeasonTour(unittest.TestCase):

    def setUp(self):
        self.tour = HighSeasonTour()
        self.tour.set_tour_id(1)
        self.tour.set_tour_name('Amazing Tour')
        self.tour.set_tour_season('High')
        self.tour.set_tour_destination('New York')
        self.tour.set_tour_description('Explore the city that never sleeps!')
        self.tour.set_tour_price(500)
        self.tour.set_tour_image('https://example.com/image.jpg')
        self.tour.set_tour_guide('John Smith')
        self.tour.set_tour_availability(True)

    def test_seasonal_price_calculation(self):
        self.assertEqual(self.tour.seasonal_price_calculation(2, 300), 900)

    def test_get_tour_id(self):
        self.assertEqual(self.tour.get_tour_id(), 1)

    def test_get_tour_name(self):
        self.assertEqual(self.tour.get_tour_name(), 'Amazing Tour')

    def test_get_tour_season(self):
        self.assertEqual(self.tour.get_tour_season(), 'High')

    def test_get_tour_destination(self):
        self.assertEqual(self.tour.get_tour_destination(), 'New York')

    def test_get_tour_description(self):
        self.assertEqual(self.tour.get_tour_description(), 'Explore the city that never sleeps!')

    def test_get_tour_price(self):
        self.assertEqual(self.tour.get_tour_price(), 500)

    def test_get_tour_image(self):
        self.assertEqual(self.tour.get_tour_image(), 'https://example.com/image.jpg')

    def test_get_tour_guide(self):
        self.assertEqual(self.tour.get_tour_guide(), 'John Smith')

    def test_get_tour_availability(self):
        self.assertEqual(self.tour.get_tour_availability(), True)

    def test_get_service_charge(self):
        self.assertEqual(self.tour.get_service_charge(), 300)

    def test_set_service_charge(self):
        self.tour.set_service_charge(400)
        self.assertEqual(self.tour.get_service_charge(), 400)


if __name__ == '__main__':
    unittest.main()
