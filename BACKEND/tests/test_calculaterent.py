# strategy pattern testing

import unittest
from accommodation import Accommodation
from calculaterentbydays import CalculateRentByDays
from calculaterentbyhours import CalculateRentByHours
from rentcontext import RentContext


class TestCalculateRent(unittest.TestCase):

    def test_calculate_rent_by_days(self):
        # Create an Accommodation object with price of £100 per day for 2 days
        acc = Accommodation()
        acc.set_acc_price(100)
        acc.set_acc_duration(2)
        # Creating a CalculateRentByDays object
        calc_rent = CalculateRentByDays()
        # Creating a RentContext object with the CalculateRentByDays object
        rent_ctx = RentContext(calc_rent)
        # Executing the rent calculation using the RentContext object
        rent = rent_ctx.execute_rent_calculation(acc)
        # Assert that the calculated rent is £1500 (100*2*3) 3 being the service charge
        self.assertEqual(rent, 600)
        
    def test_calculate_rent_by_hours(self):
        # Creating an Accommodation object with price of £30 per day for 4 hours
        acc = Accommodation()
        acc.set_acc_price(30)
        acc.set_acc_duration(4)
        # Creating a CalculateRentByHours object
        calc_rent = CalculateRentByHours()
        # Creating a RentContext object with the CalculateRentByHours object
        rent_ctx = RentContext(calc_rent)
        # Executing the rent calculation using the RentContext object
        rent = rent_ctx.execute_rent_calculation(acc)
        # Assert that the calculated rent is £5 (30/24*4)
        self.assertEqual(rent, 5)


if __name__ == '__main__':
    unittest.main()
