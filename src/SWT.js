using NUnit;
using NUnit.Framework;
namespace NUnitTest
{
    [TestFixture]
    public class Tests
    {
        private CheckDate checkDate;
        [SetUp]
        public void Setup()
        {
            checkDate = new CheckDate();
        }

        //check Empty===========================================================================================
        [Test]
        public void CheckDayEmpty_EmptyDay_ReturnsTrue()
        {
            string emptyDay = "";
            bool result = checkDate.CheckDayEmpty(emptyDay);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckDayEmpty_NonEmptyDay_ReturnsFalse()
        {
            string nonEmptyDay = "22";
            bool result = checkDate.CheckDayEmpty(nonEmptyDay);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckMonthEmpty_EmptyMonth_ReturnsTrue()
        {
            string emptyMonth = "";
            bool result = checkDate.CheckMonthEmpty(emptyMonth);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckMonthEmpty_NonEmptyMonth_ReturnsFalse()
        {
            string nonEmptyMonth = "2";
            bool result = checkDate.CheckMonthEmpty(nonEmptyMonth);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckYearEmpty_EmptyYear_ReturnsTrue()
        {
            string emptyYear = "";
            bool result = checkDate.CheckYearEmpty(emptyYear);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckYearEmpty_NonEmptyYear_ReturnsFalse()
        {
            string nonEmptyYear = "2000";
            bool result = checkDate.CheckYearEmpty(nonEmptyYear);
            Assert.IsFalse(result);
        }

        //check Format===========================================================================================
        [Test]
        public void CheckDayFormat_IntegerDay_ReturnsTrue()
        {
            string integerDay = "22";
            bool result = checkDate.CheckDayFormat(integerDay);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckDayFormat_RealDay_ReturnsFalse()
        {
            string realDay = "22.2";
            bool result = checkDate.CheckDayFormat(realDay);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDayFormat_TextDay_ReturnsFalse()
        {
            string textDay = "aa";
            bool result = checkDate.CheckDayFormat(textDay);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDayFormat_EmptyDay_ReturnsFalse()
        {
            string emptyDay = "";
            bool result = checkDate.CheckDayFormat(emptyDay);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckMonthFormat_IntegerMonth_ReturnsTrue()
        {
            string integerMonth = "2";
            bool result = checkDate.CheckMonthFormat(integerMonth);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckMonthFormat_RealMonth_ReturnsFalse()
        {
            string realMonth = "1.2";
            bool result = checkDate.CheckMonthFormat(realMonth);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckMonthFormat_TextMonth_ReturnsFalse()
        {
            string textMonth = "aa";
            bool result = checkDate.CheckMonthFormat(textMonth);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckMonthFormat_EmptyMonth_ReturnsFalse()
        {
            string emptyMonth = "";
            bool result = checkDate.CheckMonthFormat(emptyMonth);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckYearFormat_IntegerYear_ReturnsTrue()
        {
            string integerYear = "2003";
            bool result = checkDate.CheckYearFormat(integerYear);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckYearFormat_RealYear_ReturnsFalse()
        {
            string realYear = "2023.23";
            bool result = checkDate.CheckYearFormat(realYear);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckYearFormat_TextYear_ReturnsFalse()
        {
            string textYear = "aaaa";
            bool result = checkDate.CheckYearFormat(textYear);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckYearFormat_EmptyYear_ReturnsFalse()
        {
            string emptyYear = "";
            bool result = checkDate.CheckYearFormat(emptyYear);
            Assert.IsFalse(result);
        }

        //check Range===========================================================================================
        [Test]
        public void CheckDayRange_ValidIntDay_ReturnsTrue()
        {
            string validIntDay = "23";
            bool result = checkDate.CheckDayRange(validIntDay);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckDayRange_InvalidIntDay_ReturnsFalse()
        {
            string invalidIntDay = "33";
            bool result = checkDate.CheckDayRange(invalidIntDay);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDayRange_InvalidRealDay_ReturnsFalse()
        {
            string invalidRealDay = "33.33";
            bool result = checkDate.CheckDayRange(invalidRealDay);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDayRange_InvalidTextDay_ReturnsFalse()
        {
            string invalidTextDay = "aaa";
            bool result = checkDate.CheckDayRange(invalidTextDay);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDayRange_InvalidEmptyDay_ReturnsFalse()
        {
            string invalidEmptyDay = "";
            bool result = checkDate.CheckDayRange(invalidEmptyDay);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckMonthRange_ValidIntMonth_ReturnsTrue()
        {
            string validIntMonth = "2";
            bool result = checkDate.CheckMonthRange(validIntMonth);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckMonthRange_InvalidIntMonth_ReturnsFalse()
        {
            string invalidIntMonth = "14";
            bool result = checkDate.CheckMonthRange(invalidIntMonth);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckMonthRange_InvalidRealMonth_ReturnsFalse()
        {
            string invalidRealMonth = "10.3342";
            bool result = checkDate.CheckMonthRange(invalidRealMonth);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckMonthRange_InvalidTextMonth_ReturnsFalse()
        {
            string invalidTextMonth = "aa";
            bool result = checkDate.CheckMonthRange(invalidTextMonth);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckMonthRange_InvalidEmptyMonth_ReturnsFalse()
        {
            string invalidEmptyMonth = "";
            bool result = checkDate.CheckMonthRange(invalidEmptyMonth);
            Assert.IsFalse(result);
        }


        [Test]
        public void CheckYearRange_ValidIntYear_ReturnsTrue()
        {
            string validIntYear = "2022";
            bool result = checkDate.CheckYearRange(validIntYear);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckYearRange_InvalidIntYear_ReturnsFalse()
        {
            string invalidIntYear = "3333";
            bool result = checkDate.CheckYearRange(invalidIntYear);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckYearRange_InvalidRealYear_ReturnsFalse()
        {
            string invalidRealYear = "2033.333";
            bool result = checkDate.CheckYearRange(invalidRealYear);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckYearRange_InvalidTextYear_ReturnsFalse()
        {
            string invalidTextYear = "aaaa";
            bool result = checkDate.CheckYearRange(invalidTextYear);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckYearRange_InvalidEmptyYear_ReturnsFalse()
        {
            string invalidEmptyYear = "";
            bool result = checkDate.CheckYearRange(invalidEmptyYear);
            Assert.IsFalse(result);
        }

        //check Datetime===========================================================================================
        [Test]
        public void CheckDateTime_ValidIntDateLeapYear_ReturnsTrue()
        {
            string day = "29";
            string month = "2";
            string year = "2020";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckDateTime_InvalidIntDateLeapYear_ReturnsFalse()
        {
            string day = "30";
            string month = "2";
            string year = "2020";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidRealDateLeapYear_ReturnsFalse()
        {
            string day = "29.5";
            string month = "2";
            string year = "2020";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidTextDateLeapYear_ReturnsFalse()
        {
            string day = "aa";
            string month = "2";
            string year = "2020";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidEmptyDateLeapYear_ReturnsFalse()
        {
            string day = "";
            string month = "2";
            string year = "2020";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckDateTime_ValidIntDateInNormalYear_ReturnsTrue()
        {
            string day = "30";
            string month = "4";
            string year = "2023";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsTrue(result);
        }

        [Test]
        public void CheckDateTime_InvalidIntDateInNormalYear_ReturnsFalse()
        {
            string day = "31";
            string month = "4";
            string year = "2023";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidRealDateInNormalYear_ReturnsFalse()
        {
            string day = "28.34";
            string month = "4";
            string year = "2023";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidTextDateInNormalYear_ReturnsFalse()
        {
            string day = "aa";
            string month = "4";
            string year = "2023";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
        [Test]
        public void CheckDateTime_InvalidEmptyDateInNormalYear_ReturnsFalse()
        {
            string day = "";
            string month = "4";
            string year = "2023";
            bool result = checkDate.CheckDateTime(day, month, year);
            Assert.IsFalse(result);
        }
    }
}