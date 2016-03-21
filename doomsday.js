$(document).ready(function(){
	//determines if leap year
	function isLeapYear(year) {
		if (year % 4 == 0) {
			if (year % 100 == 0) {
				if (year % 400 ==0) {
					return true;
				} else {return false;}
			} else {return true;}
		} else {return false;}
	}

	//calculates the doomsday
	function doomsday(year) {
		var anchor = anchorDay(year);
		var lastTwo = year % 100;
		
		var a = Math.floor(lastTwo / 12);
		var b = lastTwo % 12;
		var c = Math.floor(b / 4);
		var d = (a + b + c) % 7 + anchor;
		
		return d % 7;
	}
                
	//sets anchor day for doomsday algorithm
	function anchorDay(year) {
		switch (true) {
			case (year >= 1800 && year < 1900):
				return 5;
				break;
			case (year >= 1900 && year < 2000):
				return 3;
				break;
			case (year >= 2000 && year < 2100):
				return 2;
				break;
			case (year >= 2100 && year < 2200):
				return 0;
				break;
			default:
				break;
		}
	}

	function setMonth(currentMonth) {
		switch (currentMonth) {
			case (Month.JAN):
				daysInMonth = 31;
				if (isCurrentLeapYear) {
					weekdayStart = (currentDoomsday + 4) % 7;
				} else {
					weekdayStart = (currentDoomsday + 5) % 7;
				}
				prevMonth = Month.DEC;
				nextMonth = Month.FEB;
				break;
			case (Month.FEB):
				if (isCurrentLeapYear) {
					daysInMonth = 29;
					weekdayStart = currentDoomsday;
				} else {
					daysInMonth = 28;
					weekdayStart = (currentDoomsday + 1) % 7;
				}
				prevMonth = Month.JAN;
				nextMonth = Month.MAR;
				break;
			case (Month.MAR):
				daysInMonth = 31;
				weekdayStart = (currentDoomsday + 1) % 7;
				prevMonth = Month.FEB;
				nextMonth = Month.APR;
				break;
			case (Month.APR):
				daysInMonth = 30;
				weekdayStart = (currentDoomsday + 4) % 7;
				prevMonth = Month.MAR;
				nextMonth = Month.MAY;
				break;
			case (Month.MAY):
				daysInMonth = 31;
				weekdayStart = (currentDoomsday + 6) % 7;
				prevMonth = Month.APR;
				nextMonth = Month.JUN;
				break;
			case (Month.JUN):
				daysInMonth = 30;
				weekdayStart = (currentDoomsday + 2) % 7;
				prevMonth = Month.MAY;
				nextMonth = Month.JUL;
				break;
			case (Month.JUL):
				daysInMonth = 31;
				weekdayStart = (currentDoomsday + 4) % 7;
				prevMonth = Month.JUN;
				nextMonth = Month.AUG;
				break;
			case (Month.AUG):
				daysInMonth = 31;
				weekdayStart = currentDoomsday;
				prevMonth = Month.JUL;
				nextMonth = Month.SEP;
				break;
			case (Month.SEP):
				daysInMonth = 30;
				weekdayStart = (currentDoomsday + 3) % 7;
				prevMonth = Month.AUG;
				nextMonth = Month.OCT;
				break;
			case (Month.OCT):
				daysInMonth = 31;
				weekdayStart = (currentDoomsday + 5) % 7;
				prevMonth = Month.SEP;
				nextMonth = Month.NOV;
				break;
			case (Month.NOW):
				daysInMonth = 30;
				weekdayStart = (currentDoomsday + 1) % 7;
				prevMonth = Month.OCT;
				nextMonth = Month.DEC;
				break;
			case (Month.DEC):
				daysInMonth = 31;
				weekdayStart = (currentDoomsday + 4) % 7;
				prevMonth = Month.NOV;
				nextMonth = Month.JAN;
				break;
		}
		
		var weeksInMonth = Math.ceil((daysInMonth + weekdayStart) / 7);
	}

	function printDates() {
		var x = 1;
		var week = 0;
		var currentWeekday = weekdayStart;
		
		while (x <= daysInMonth) {
			
			var cellId = week + "." + weekday;
			
			document.getElementById(cellId).innerHTML = x;
			
			switch (currentWeekday) {
				case (Weekday.SUN):
					prevWeekday = Weekday.SAT;
					nextWeekday = Weekday.MON;
					break;
				case (Weekday.MON):
					prevWeekday = Weekday.SUN;
					nextWeekday = Weekday.TUE;
					break;
				case (Weekday.TUE):
					prevWeekday = Weekday.MON;
					nextWeekday = Weekday.WED;
					break;
				case (Weekday.WED):
					prevWeekday = Weekday.TUE;
					nextWeekday = Weekday.THU;
					break;
				case (Weekday.THU):
					prevWeekday = Weekday.WED;
					nextWeekday = Weekday.FRI;
					break;
				case (Weekday.FRI):
					prevWeekday = Weekday.THU;
					nextWeekday = Weekday.SAT;
					break;
				case (Weekday.SAT):
					prevWeekday = Weekday.FRI;
					nextWeekday = Weekday.SUN;
					week ++;
					break;
			}
			
			currentWeekday = nextWeekday;
			x++;
		}
	}
});