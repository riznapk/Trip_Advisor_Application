""" This is TourSeasonSelection"""
from highseasontour import HighSeasonTour
from shoulderseasontour import ShoulderSeasonTour
from lowseasontour import LowSeasonTour


# GoF Facade pattern -------------------------
class TourSeasonSelection:

    def __init__(self):
        self.__high_season = HighSeasonTour()
        self.__shoulder_season = ShoulderSeasonTour()
        self.__low_season = LowSeasonTour()

    def high_season_selection(self, people_count, price_per_person):
        return self.__high_season.seasonal_price_calculation(people_count, price_per_person)

    def shoulder_season_selection(self, people_count, price_per_person):
        return self.__shoulder_season.seasonal_price_calculation(people_count, price_per_person)

    def low_season_selection(self, people_count, price_per_person):
        return self.__low_season.seasonal_price_calculation(people_count, price_per_person)
