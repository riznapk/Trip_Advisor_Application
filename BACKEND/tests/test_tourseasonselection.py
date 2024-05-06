# Facade pattern testing

import unittest
from tourseasonselection import TourSeasonSelection


class TestTourSeasonSelection(unittest.TestCase):

    def setUp(self):
        self.tour_season_selection = TourSeasonSelection()

    def test_high_season_selection(self):
        price = self.tour_season_selection.high_season_selection(2, 100)
        self.assertEqual(price, 500)

    def test_shoulder_season_selection(self):
        price = self.tour_season_selection.shoulder_season_selection(2, 100)
        self.assertEqual(price, 400)

    def test_low_season_selection(self):
        price = self.tour_season_selection.low_season_selection(2, 100)
        self.assertEqual(price, 300)


if __name__ == '__main__':
    unittest.main()
