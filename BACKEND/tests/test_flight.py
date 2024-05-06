import unittest
from flight import Flight


class TestFlight(unittest.TestCase):

    def setUp(self):
        self.flight = Flight()
        self.flight.set_travel_id("ABC123")
        self.flight.set_travel_type("Economy")
        self.flight.set_ticket_price(100)

    def test_get_travel_id(self):
        self.assertEqual(self.flight.get_travel_id(), "ABC123")

    def test_get_travel_type(self):
        self.assertEqual(self.flight.get_travel_type(), "Economy")

    def test_get_ticket_price(self):
        self.assertEqual(self.flight.get_ticket_price(), 100)

    def test_get_total_price(self):
        self.assertEqual(self.flight.get_total_price(2), 200)


if __name__ == '__main__':
    unittest.main()
