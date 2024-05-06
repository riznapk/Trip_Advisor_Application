""" This is the entity, Rail Transport"""
from transportation import Transportation


# CarRental implements Transportation

class CarRental(Transportation):

    def __init__(self):
        self._travel_id = ""
        self._travel_type = ""
        self._rental_price = 1
        self._travel_price = 0

    def get_travel_id(self):  # get method
        return self._travel_id

    def set_travel_id(self, travelId):  # set method
        self._travel_id = travelId

    def get_travel_type(self):  # get method
        return self._travel_type

    def set_travel_type(self, travelType):  # set method
        self._travel_type = travelType

    def get_rental_price(self):  # get method
        return self._rental_price

    def set_rental_price(self, rentalPrice):  # set method
        self._rental_price = rentalPrice

    def get_travel_price(self):  # get method
        return self._travel_price

    def set_travel_price(self, travelPrice):  # set method
        self._travel_price = travelPrice

    def get_total_price(self, car_count, day_count):  # total price calculation
        rental_price_int = int(self._rental_price)
        car_count_int = int(car_count)
        day_count_int = int(day_count)
        total_price = rental_price_int * car_count_int * day_count_int
        return total_price
