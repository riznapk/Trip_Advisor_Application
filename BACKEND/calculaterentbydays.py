""" This is the entity, CalculateRentByDays"""
from calculaterent import CalculateRent


#  GoF strategy pattern  -------------------
class CalculateRentByDays(CalculateRent):

    def rent_calculation(self, rate_per_day, rent_duration):  # function implementation of rent calculation
        service_charge = 3
        rate_per_day = int(rate_per_day)
        rent_duration = int(rent_duration)
        total_rent = rate_per_day * rent_duration * service_charge
        return total_rent
