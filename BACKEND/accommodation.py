class Accommodation:
    # a method to create objects
    def __init__(self):
        self._acc_id = ""
        self._acc_name = ""
        self._acc_type = ""
        self._acc_price = 1
        self._acc_duration = 1
        self._acc_image = ""

    def get_acc_id(self):  # get method
        return self._acc_id

    def set_acc_id(self, accId):  # set method
        self._acc_id = accId

    def get_acc_name(self):  # get method
        return self._acc_name

    def set_acc_name(self, accName):  # set method
        self._acc_name = accName

    def get_acc_type(self):  # get method
        return self._acc_type

    def set_acc_type(self, accType):  # set method
        self._acc_type = accType

    def get_acc_price(self):  # get method
        return self._acc_price

    def set_acc_price(self, accPrice):  # set method
        self._acc_price = accPrice

    def get_acc_duration(self):  # get method
        return self._acc_duration

    def set_acc_duration(self, accDuration):  # set method
        self._acc_duration = accDuration

    def get_acc_image(self):  # get method
        return self._acc_image

    def set_acc_image(self, accImage):  # set method
        self._acc_image = accImage
