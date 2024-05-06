""" This is the interface Tour"""


class Tour:

    def __init__(self):
        self._tour_id = ""
        self._tour_name = ""
        self._tour_destination = ""
        self._tour_description = ""
        self._tour_price = 0
        self._tour_season = ""
        self._tour_image = ""
        self._tour_guide = ""
        self._tour_availability = ""

    def get_tour_id(self):  # get method
        pass

    def set_tour_id(self, tourID):  # set method
        pass

    def get_tour_season(self):  # get method
        pass

    def set_tour_season(self, tourSeason):  # set method
        pass

    def get_tour_name(self):  # get method
        pass

    def set_tour_name(self, tourName):  # set method
        pass

    def get_tour_destination(self):  # get method
        pass

    def set_tour_destination(self, tourDestination):  # set method
        pass

    def get_tour_description(self):  # get method
        pass

    def set_tour_description(self, tourDescription):  # set method
        pass

    def get_tour_price(self):  # get method
        pass

    def set_tour_price(self, tourPrice):  # set method
        pass

    def get_tour_image(self):  # get method
        pass

    def set_tour_image(self, tourImage):  # set method
        pass

    def get_tour_guide(self):  # get method
        pass

    def set_tour_guide(self, tourGuide):  # set method
        pass

    def get_tour_availability(self):  # get method
        pass

    def set_tour_availability(self, tourAvailability):  # set method
        pass

    # GoF Facade pattern -------------------------
    def seasonal_price_calculation(self, people_count, price_per_person):
        pass
