import unittest
from transportation import Transportation
from carrental import CarRental
from flight import Flight
from railtransport import RailTransport
from transportationfactory import TransportationFactory


class TestTransportation(unittest.TestCase):
    def test_car_rental(self):
        car_rental = CarRental()
        car_rental.set_travel_id("CR001")
        car_rental.set_travel_type("Compact")
        car_rental.set_travel_price(50)
        self.assertEqual(car_rental.get_travel_id(), "CR001")
        self.assertEqual(car_rental.get_travel_type(), "Compact")
        self.assertEqual(car_rental.get_travel_price(), 50)

    def test_flight(self):
        flight = Flight()
        flight.set_travel_id("F001")
        flight.set_travel_type("Economy")
        flight.set_ticket_price(200)
        flight.set_travel_price(0)
        self.assertEqual(flight.get_travel_id(), "F001")
        self.assertEqual(flight.get_travel_type(), "Economy")
        self.assertEqual(flight.get_ticket_price(), 200)
        self.assertEqual(flight.get_travel_price(), 0)
        self.assertEqual(flight.get_total_price(2), 400)

    def test_transportation_factory(self):
        factory = TransportationFactory()
        car_rental = factory.get_transport_details("car")
        flight = factory.get_transport_details("flight")
        rail_transport = factory.get_transport_details("rail")
        invalid = factory.get_transport_details("invalid")
        self.assertIsInstance(car_rental, CarRental)
        self.assertIsInstance(flight, Flight)
        self.assertIsInstance(rail_transport, RailTransport)
        self.assertIsNone(invalid)


if __name__ == '__main__':
    unittest.main()
