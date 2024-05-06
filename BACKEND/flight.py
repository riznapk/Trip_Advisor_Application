""" This is the entity, Flight"""
from transportation import Transportation


# Flight implements Transportation

class Flight(Transportation):
    def __init__(self):
        self._travel_id = ""
        self._travel_type = ""
        self._ticket_price = 1
        self._travel_price = 0

    def get_travel_id(self):  # get method
        return self._travel_id

    def set_travel_id(self, travelId):  # set method
        self._travel_id = travelId

    def get_travel_type(self):  # get method
        return self._travel_type

    def set_travel_type(self, travelType):  # set method
        self._travel_type = travelType

    def get_ticket_price(self):  # get method
        return self._ticket_price

    def set_ticket_price(self, ticketPrice):  # set method
        self._ticket_price = ticketPrice

    def get_travel_price(self):  # get method
        return self._travel_price

    def set_travel_price(self, travelPrice):  # set method
        self._travel_price = travelPrice

    def get_total_price(self, count):  # calculating total price of the transportation by ticket count
        ticket_price_int = int(self._ticket_price)
        count_int = int(count)
        total_price = ticket_price_int * count_int
        return total_price
