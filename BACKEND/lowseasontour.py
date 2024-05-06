""" This is the entity, HighSeasonTour"""
from tour import Tour


class LowSeasonTour(Tour):

    def __init__(self):
        super().__init__()
        self._service_charge = 100  # default

    # GoF Facade pattern ------------------------------------------------------------
    def seasonal_price_calculation(self, people_count, price_per_person):
        people_count = int(people_count)
        price_per_person = int(price_per_person)
        price = people_count * price_per_person
        self._tour_price = price + self._service_charge
        return self._tour_price

    # -------------------------------------------------------------------------------

    def get_tour_id(self):  # get method
        return self._tour_id

    def set_tour_id(self, tourID):  # set method
        self._tour_id = tourID

    def get_tour_name(self):  # get method
        return self._tour_name

    def set_tour_name(self, tourName):  # set method
        self._tour_name = tourName

    def get_tour_destination(self):  # get method
        return self._tour_destination

    def set_tour_destination(self, tourDestination):  # set method
        self._tour_destination = tourDestination

    def get_tour_description(self):  # get method
        return self._tour_description

    def set_tour_description(self, tourDescription):  # set method
        self._tour_description = tourDescription

    def get_tour_price(self):  # get method
        return self._tour_price

    def set_tour_price(self, tourPrice):  # set method
        self._tour_price = tourPrice

    def get_tour_image(self):  # get method
        return self._tour_image

    def set_tour_image(self, tourImage):  # set method
        self._tour_image = tourImage

    def get_tour_guide(self):  # get method
        return self._tour_guide

    def set_tour_guide(self, tourGuide):  # set method
        self._tour_guide = tourGuide

    def get_tour_availability(self):  # get method
        return self._tour_availability

    def set_tour_availability(self, tourAvailability):  # set method
        self._tour_availability = tourAvailability

    def get_service_charge(self):  # get method
        return self._service_charge

    def set_service_charge(self, serviceCharge):  # set method
        self._service_charge = serviceCharge
