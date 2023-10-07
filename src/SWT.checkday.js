using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace NUnit
{
    public class CheckDate
    {
        public static void Main(string[] args)
        {

        }
        public bool CheckDayEmpty(string day)
        {
            return (day == "" || day == null) ? true : false;
        }

        public bool CheckMonthEmpty(string month)
        {
     
            return (month == "" || month == null) ? true : false;
        }

        public bool CheckYearEmpty(string year)
        {
            
            return (year == null || year == "") ? true : false;
        }

        public bool CheckDayFormat(string day)
        {
            //return Regex.IsMatch(day, @"^[0-9]*$");
            //cái trên thì không check được real number
            return IsInteger(day) ? true : false;
        }

        public bool CheckMonthFormat(string month)
        {
            return IsInteger(month) ? true : false;
        }

        public bool CheckYearFormat(string year)
        {
            return IsInteger(year) ? true : false;
        }

        public bool CheckDayRange(string day)
        {
            if (!IsInteger(day))
            {
                return false;
            }else if(int.Parse(day) >= 1 && int.Parse(day) <= 31)
            {
                return true;
            }else return false;
        }

        public bool CheckMonthRange(string month)
        {
            if (!IsInteger(month))
            {
                return false;
            }
            else if (int.Parse(month) >= 1 && int.Parse(month) <= 12)
            {
                return true;
            }
            else return false;
        }

        public bool CheckYearRange(string year)
        {
            if (!IsInteger(year))
            {
                return false;
            }
            else if (int.Parse(year) >= 1000 && int.Parse(year) <= 3000)
            {
                return true;
            }
            else return false;
        }

        public bool CheckDateTime(string day, string month, string year)
        {
            int d, m, y;
            int max = 31;
            if (IsInteger(day) && IsInteger(month) && IsInteger(year))
            {
                d = int.Parse(day);
                m = int.Parse(month);
                y = int.Parse(year);
                if (m == 4 || m == 6 || m == 9 || m == 11) max = 30;
                else
                {
                    if (m == 2)
                    {
                        if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) max = 29; //check nam nhuan hay khong
                        else max = 28;
                    }
                }
                return d <= max;
            }
            else return false;
        }

        private bool IsInteger(string input)
        {
            int number;
            return int.TryParse(input, out number);
        }
    }
}
