document.addEventListener("DOMContentLoaded", populateMonth, false);
document.addEventListener("DOMContentLoaded", populateWeek, false);

var today = new Date();
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (isLeapYear(today.getFullYear())) {
	daysInMonth[1] = 29;
}

//finds the start of each week
function findWeekStart(referenceDay, forMonth) {
	if (referenceDay.getDay() != 0){
		if (referenceDay.getDate() < 6) { // if the week goes into the previous month
			if (referenceDay.getMonth()==0) { //if the week goes into the previous year
				var day = daysInMonth[11]-(referenceDay.getDay()-referenceDay.getDate());
				var currentDay = new Date(referenceDay.getFullYear()-1, 11, day);
			} else { //if the week stays in the current year
				var day = daysInMonth[referenceDay.getMonth()-1]-(referenceDay.getDay()-referenceDay.getDate());
				var currentDay = new Date(referenceDay.getFullYear(), referenceDay.getMonth()-1, day);
			}
		} else { // if the weeek stays in the current month
			var day = referenceDay.getDate()-referenceDay.getDay();
			var currentDay = new Date(referenceDay.getFullYear(), referenceDay.getMonth(), day);
		}
	} else { // if referenceDay is the start of the week
		var day = referenceDay.getDate();
		currentDay = referenceDay;
	}
	populate(currentDay, day, forMonth);
}

//populates the week or month with dates	
function populate(currentDay, day, forMonth) {
	if (forMonth) {
		var table = document.getElementById("monthly");
	} else {
		var table = document.getElementById("weekly");
	}
	var row = table.insertRow(1);
	for (var i = 0; i < 7; i++){
		var cell = row.insertCell(i);
		cell.innerHTML = currentDay.getDate();
		day = day + 1;
		if (day > daysInMonth[currentDay.getMonth()]) { // if we are at the end of the current month
			if (currentDay.getMonth()==11) { // if we are going into the next year
				day = 1;
				currentDay = new Date(currentDay.getFullYear()+1, 1, day);
			} else { // if we stay in the current year
				day = 1;
				currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, day);
			}
		} else { //if we stay in the same month	
			currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), day);
		}
	}
}

//populates dates for the month	
function populateMonth() {
	var day = daysInMonth[today.getMonth()];
	var monthEnd = new Date(today.getFullYear(), today.getMonth(), day);
	var currentDay = monthEnd;
	while (day > 0) {
		findWeekStart(currentDay, true);
		day = day-7;
		currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), day);
	}
}

//populates dates for the week
function populateWeek() {
	findWeekStart(today, false);
}

//shows week view when week button is pressed	
function showWeek() {
	document.getElementById("weekly").style.display="table";
	document.getElementById("monthly").style.display="none";
}

//shows month view when month button is pressed	
function showMonth() {
	document.getElementById("monthly").style.display="table";
	document.getElementById("weekly").style.display="none";
}

//determines if the year is a leap year	
function isLeapYear(year) {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			} else {return false;}
		} else {return true;}
	} else {return false;}
}