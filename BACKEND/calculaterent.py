""" This is the interface, Calculate Rent"""


#  GoF strategy pattern interface -------------------
class CalculateRent:

    def rent_calculation(self, rate_per_day, rent_duration):  # abstract method of rent calculation
        pass
