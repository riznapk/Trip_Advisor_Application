import unittest
from transportation import Transportation
from railtransport import RailTransport


class TestRailTransport(unittest.TestCase):

    def test_rail_transport_instance(self):
        rail_transport = RailTransport()
        self.assertIsInstance(rail_transport, Transportation)
        self.assertIsInstance(rail_transport, RailTransport)

    def test_get_set_methods(self):
        rail_transport = RailTransport()
        rail_transport.set_travel_id("YUOPR00290")
        self.assertEqual(rail_transport.get_travel_id(), "YUOPR00290")

        rail_transport.set_travel_type("flight")
        self.assertEqual(rail_transport.get_travel_type(), "flight")

        rail_transport.set_ticket_price(3900)
        self.assertEqual(rail_transport.get_ticket_price(), 3900)

        rail_transport.set_travel_price(680)
        self.assertEqual(rail_transport.get_travel_price(), 680)

    def test_get_total_price(self):
        rail_transport = RailTransport()
        rail_transport.set_ticket_price(150)
        self.assertEqual(rail_transport.get_total_price(5), 750)


if __name__ == '__main__':
    unittest.main()
