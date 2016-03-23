document.addEventListener("DOMContentLoaded", setInitial, false);

var selectedDate;
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setInitial(){
selectedDate = new Date();
currentDate = new Date();
isLeapYear(selectedDate.getFullYear());
populateMonth(currentDate)
populateWeek(currentDate);	
}

// Populates dates for the month	
function populateMonth(date) {
	document.getElementById("monthName").innerHTML = months[date.getMonth()]+", "+ date.getFullYear();
	var day = daysInMonth[date.getMonth()];
	var monthEnd = new Date(date.getFullYear(), date.getMonth(), day);
	var currentDay = monthEnd;
	while (day > 0) {
		findWeekStart(currentDay, true);
		day = day-7;
		currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), day);
	}
}

// Populates dates for the week
function populateWeek(date) {
	findWeekStart(date, false);
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

// Populates the week or month with dates	
function populate(currentDay, day, forMonth) {
	var printDay = day;
	if (forMonth) {
		var table = document.getElementById("monthly");
	} else {
		var table = document.getElementById("weekly");
	}
	var row = table.insertRow(1);
	for (var i = 0; i < 7; i++){
		var cell = row.insertCell(i);
		cell.innerHTML = currentDay.getDate();
		printDay = printDay + 1;
		if (printDay > daysInMonth[currentDay.getMonth()]) { // if we are at the end of the current month
			if (currentDay.getMonth()==11) { // if we are going into the next year
				printDay = 1;
				currentDay = new Date(currentDay.getFullYear()+1, 1, printDay);
			} else { // if we stay in the current year
				printDay = 1;
				currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, printDay);
			}
		} else { //if we stay in the same month	
			currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), printDay);
		}
	}
	
	//for nav bar mini calendar
	var printDay = day;
	var navTable = document.getElementById("navMonthly");
	
	var navRow = navTable.insertRow(1);
	for (var i = 0; i < 7; i++){
		var navCell = navRow.insertCell(i);
		navCell.innerHTML = currentDay.getDate();
		printDay = printDay + 1;
		if (printDay > daysInMonth[currentDay.getMonth()]) { // if we are at the end of the current month
			if (currentDay.getMonth()==11) { // if we are going into the next year
				printDay = 1;
				currentDay = new Date(currentDay.getFullYear()+1, 1, printDay);
			} else { // if we stay in the current year
				printDay = 1;
				currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, printDay);
			}
		} else { //if we stay in the same month	
			currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), printDay);
		}
	}
}


// shows week view when week button is pressed	
function showWeek() {
	document.getElementById("weekly").style.display="table";
	document.getElementById("monthly").style.display="none";
}

// shows month view when month button is pressed	
function showMonth() {
	document.getElementById("monthly").style.display="table";
	document.getElementById("weekly").style.display="none";
}

//determines if the year is a leap year	
function isLeapYear(year) {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				daysInMonth[1]=29;
			} else {daysInMonth[1]=28;}
		} else {daysInMonth[1]=29;}
	} else {daysInMonth[1]=28;}
}

function clearTable(tableName) {
	var table = document.getElementById(tableName);
	for(var i = table.rows.length - 1; i > 0; i--)
	{
		table.deleteRow(i);
	}
}

function goToDate() {
	clearTable("monthly");
	clearTable("weekly");

	var dropDown = document.getElementById("months");
	var monthString = dropDown.options[dropDown.selectedIndex].text;
	var m;
	for (m in months) {
		if (monthString.substring(0,3)==months[m]) {
			var month = m;
		}
	}
	var day = document.getElementById("day").value;
	var year = document.getElementById("year").value;
	var selectedDate = new Date(year, month, day);
	alert(selectedDate.getMonth());
	isLeapYear(selectedDate.getFullYear());						
	showMonth();
	populateMonth(selectedDate);
	populateWeek(selectedDate);
}

function prevWeek() {
	if (selectedDate.getDate() < 7) { // if the previous week goes into the previous month
		if (selectedDate.getMonth() == 0) { // if the previous week goes into the previous year
			selectedDate = new Date(selectedDate.getFullYear()-1, 11, daysInMonth[11]-(7-selectedDate.getDate()));
		} else { 
			selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1, selectedDate.getDate()-7);
		}
	} else { // if the previous week stays in the same month
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()-7);
	}
	clearTable("weekly");
	clearTable("monthly");
	
	isLeapYear(selectedDate.getFullYear());
	showWeek();
	populateWeek(selectedDate);
	populateMonth(selectedDate);
}

function nextWeek() {
	if (selectedDate.getDate() > daysInMonth[selectedDate.getMonth()-7]) { // if next week goes into the next month
		if (selectedDate.getMonth() == 11) { // if the next week goes into the next year
			selectedDate = new Date(selectedDate.getFullYear()+1, 1, (7-selectedDate.getDate()));
		} else { 
			selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, selectedDate.getDate()+7);
		}
	} else { // if the next week stays in the same month
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()+7);
	}
	clearTable("weekly");
	clearTable("monthly");
	
	isLeapYear(selectedDate.getFullYear());
	
	showWeek();
	populateWeek(selectedDate);
	populateMonth(selectedDate);
}

function prevMonth() {
	if (selectedDate.getMonth() == 0) { // if the previous month goes into the previous year
		selectedDate = new Date(selectedDate.getFullYear()-1, 11, 1);
	} else { // if the previous month stays in the same year
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1,1);
	}
	clearTable("weekly");
	clearTable("monthly");
	
	isLeapYear(selectedDate.getFullYear());
	
	showMonth();
	populateMonth(selectedDate);
	populateWeek(selectedDate);
}

function nextMonth() {
		alert(selectedDate);
		if (selectedDate.getMonth() == 11) { // if the next month goes into the next year
			selectedDate = new Date(selectedDate.getFullYear()+1, 1, 1);
		} else { 
			selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 1);
		}

	clearTable("weekly");
	clearTable("monthly");
	
	isLeapYear(selectedDate.getFullYear());
	
	showMonth();
	populateWeek(selectedDate);
	populateMonth(selectedDate);
}