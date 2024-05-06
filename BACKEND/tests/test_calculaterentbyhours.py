import unittest
from calculaterentbyhours import CalculateRentByHours


class TestCalculateRentByHours(unittest.TestCase):

    def test_rent_calculation(self):
        rent_calculator = CalculateRentByHours()
        rate_per_day = 100
        rent_duration = 3
        expected_rent = 12.5
        actual_rent = rent_calculator.rent_calculation(rate_per_day, rent_duration)
        self.assertEqual(expected_rent, actual_rent)


if __name__ == '__main__':
    unittest.main()
