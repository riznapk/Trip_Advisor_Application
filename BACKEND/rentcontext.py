""" This is  Rent Context"""


#  GoF strategy pattern  -------------------
class RentContext:
    def __init__(self, calculaterent):
        self.__calculate_rent = calculaterent

    def execute_rent_calculation(self, accommodation):  # rent calculation function
        rent_per_day = accommodation.get_acc_price()
        rent_duration = accommodation.get_acc_duration()
        print("execute price", rent_per_day, rent_duration)
        return self.__calculate_rent.rent_calculation(rent_per_day, rent_duration)
