import unittest
from shoulderseasontour import ShoulderSeasonTour
from railtransport import RailTransport


class TestRailTransport(unittest.TestCase):
    def test_tour_instance(self):
        shoulder_tour = ShoulderSeasonTour()
        self.assertIsInstance(shoulder_tour, ShoulderSeasonTour)

    def test_get_set_methods(self):
        shoulder_tour = ShoulderSeasonTour()
        shoulder_tour.set_tour_id("TUIO00901")
        self.assertEqual(shoulder_tour.get_tour_id(), "TUIO00901")

        shoulder_tour.set_tour_name("Shoulder Season Tour")
        self.assertEqual(shoulder_tour.get_tour_name(), "Shoulder Season Tour")

        shoulder_tour.set_tour_destination("Italy")
        self.assertEqual(shoulder_tour.get_tour_destination(), "Italy")

        shoulder_tour.set_tour_description("Whatever your heart desires you’ll find it here and from chaotic markets to peaceful parks, the diverse range of activities and attractions is as mind-boggling as it's enchanting.")
        self.assertEqual(shoulder_tour.get_tour_description(), "Whatever your heart desires you’ll find it here and from chaotic markets to peaceful parks, the diverse range of activities and attractions is as mind-boggling as it's enchanting.")

        shoulder_tour.set_tour_price(190)
        self.assertEqual(shoulder_tour.get_tour_price(), 190)

        shoulder_tour.set_tour_guide("John Doe")
        self.assertEqual(shoulder_tour.get_tour_guide(), "John Doe")

        shoulder_tour.set_tour_availability(True)
        self.assertEqual(shoulder_tour.get_tour_availability(), True)

        shoulder_tour.set_service_charge(190)
        self.assertEqual(shoulder_tour.get_service_charge(), 190)

    def test_seasonal_price_calculation(self):
        shoulder_tour = ShoulderSeasonTour()
        tour_price = shoulder_tour.seasonal_price_calculation(4, 20)
        self.assertEqual(tour_price, 280)


if __name__ == '__main__':
    unittest.main()
