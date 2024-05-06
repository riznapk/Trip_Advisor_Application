import unittest
from calculaterentbydays import CalculateRentByDays


class TestCalculateRentByDays(unittest.TestCase):

    def test_rent_calculation(self):
        calculate_rent = CalculateRentByDays()
        self.assertEqual(calculate_rent.rent_calculation(100, 7), 2100)
        self.assertEqual(calculate_rent.rent_calculation(50, 14), 2100)
        self.assertEqual(calculate_rent.rent_calculation(75, 3), 675)


if __name__ == '__main__':
    unittest.main()
