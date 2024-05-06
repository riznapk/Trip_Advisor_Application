# factory pattern testing

import unittest
from transportationfactory import TransportationFactory


class TestTransportationFactory(unittest.TestCase):

    def test_get_transport_details_car(self):
        factory = TransportationFactory()
        car = factory.get_transport_details("car")
        self.assertEqual(car.__class__.__name__, "CarRental")

    def test_get_transport_details_flight(self):
        factory = TransportationFactory()
        flight = factory.get_transport_details("flight")
        self.assertEqual(flight.__class__.__name__, "Flight")

    def test_get_transport_details_rail(self):
        factory = TransportationFactory()
        rail = factory.get_transport_details("rail")
        self.assertEqual(rail.__class__.__name__, "RailTransport")

    def test_get_transport_details_invalid(self):
        factory = TransportationFactory()
        invalid = factory.get_transport_details("invalid")
        self.assertIsNone(invalid)


if __name__ == '__main__':
    unittest.main()
