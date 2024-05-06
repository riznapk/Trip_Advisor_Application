from transportationfactory import TransportationFactory
from tour import Tour
from accommodation import Accommodation


class Package:
    # a method to create objects
    def __init__(self):
        self._package_id = ""
        self._package_name = ""
        self._package_destination = ""
        self._package_description = ""
        self._package_duration = 1
        self._service_charge = 30
        self._package_price = 0
        self._package_image = ""
        self._tour_info = Tour()
        self._transport_info = TransportationFactory()
        self._accommodation_info = Accommodation()

    def get_package_id(self):  # get method
        return self._package_id

    def set_package_id(self, packageID):  # set method
        self._package_id = packageID

    def get_package_name(self):  # get method
        return self._package_name

    def set_package_name(self, packageName):  # set method
        self._package_id = packageName

    def get_package_destination(self):  # get method
        return self._package_destination

    def set_package_destination(self, packageDestination):  # set method
        self._package_destination = packageDestination

    def get_package_description(self):  # get method
        return self._package_description

    def set_package_description(self, packageDescription):  # set method
        self._package_description = packageDescription

    def get_service_charge(self):  # get method
        return self._service_charge

    def set_service_charge(self, serviceCharge):  # set method
        self._service_charge = serviceCharge

    def get_package_duration(self):  # get method
        return self._package_duration

    def set_package_duration(self, packageDuration):  # set method
        self._package_duration = packageDuration

    def get_package_price(self):  # get method
        return self._package_price

    def set_package_price(self, packagePrice):  # set method
        self._service_charge = packagePrice

    def get_package_image(self):  # get method
        return self._package_image

    def set_package_image(self, packageImage):  # set method
        self._package_image = packageImage

    #  GoF factory method pattern-------------------

    def get_transport_info(self):  # get method
        return self._transport_info

    def set_transport_info(self):  # composition
        factory = TransportationFactory()
        self._transport_info = factory

    #  ----------------------------------------------

    def get_tour_info(self):
        return self._tour_info

    def set_tour_info(self, tourID, tourName, tourDestination, tourDescription, tourPrice, tourSeason, tourImage,
                      tourGuide, tourAvailability):  # composition
        self._tour_info._tour_id = tourID
        self._tour_info._tour_name = tourName
        self._tour_info._tour_destination = tourDestination
        self._tour_info._tour_description = tourDescription
        self._tour_info._tour_price = tourPrice
        self._tour_info._tour_season = tourSeason
        self._tour_info._tour_image = tourImage
        self._tour_info._tour_guide = tourGuide
        self._tour_info._tour_availability = tourAvailability
        print("from package", tourPrice)

    def get_accommodation_info(self):
        return self._accommodation_info

    def set_accommodation_info(self, accId, accName, accType, accPrice, accDuration, accImage):  # composition
        print("from package", accPrice, accDuration)
        self._accommodation_info.set_acc_id(accId)
        self._accommodation_info.set_acc_name(accName)
        self._accommodation_info.set_acc_type(accType)
        self._accommodation_info.set_acc_price(accPrice)
        self._accommodation_info.set_acc_duration(accDuration)
        self._accommodation_info.set_acc_image(accImage)

    # def calculate_total_package_price(self, transportPrice, accPrice, tourPrice):
    #     transportPrice = int(transportPrice)
    #     accPrice = int(accPrice)
    #     tourPrice = int(tourPrice)
    #     total_amount = transportPrice + accPrice + tourPrice
    #     return total_amount
