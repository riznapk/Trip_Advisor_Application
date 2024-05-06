""" This is the entity, CalculateRentByHours"""
from calculaterent import CalculateRent


#  GoF strategy pattern  -------------------
class CalculateRentByHours(CalculateRent):

    def rent_calculation(self, rate_per_day, rent_duration):   # function implementation of rent calculation
        rate_per_day = int(rate_per_day)
        rent_duration = int(rent_duration)
        rate_per_hour = rate_per_day / 24.0
        total_rent = rent_duration * rate_per_hour
        return total_rent
