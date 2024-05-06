""" TransportationFactory"""
from railtransport import RailTransport
from flight import Flight
from carrental import CarRental


class TransportationFactory:

    def __init__(self):  # a method to create objects
        self._transport_info = None

    def get_transport_details(self, travel_mode):  # GoF factory method pattern
        if travel_mode is not None:
            if travel_mode.lower() == "car":
                self._transport_info = CarRental()
            elif travel_mode.lower() == "flight":
                self._transport_info = Flight()
            elif travel_mode.lower() == "rail":
                self._transport_info = RailTransport()
            else:
                self._transport_info = None

        return self._transport_info
