""" This is the interface, Transportation"""


class Transportation:
    # a method to create objects
    def __init__(self):
        self._travel_id = ""
        self._travel_type = ""
        self._travel_price = 0

    def get_travel_id(self):  # get method
        pass

    def set_travel_id(self, travelId):  # set method
        pass

    def get_travel_type(self):  # get method
        pass

    def set_travel_type(self, totalType):  # set method
        pass

    def get_travel_price(self):  # get method
        pass

    def set_travel_price(self, totalPrice):  # set method
        pass
