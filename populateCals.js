document.addEventListener("DOMContentLoaded", setInitial, false);
document.getElementById("weekButton").addEventListener("click", showWeek, false);
document.getElementById("monthButton").addEventListener("click", showMonth, false);
document.getElementById("prevButton").addEventListener("click", prev, false);
document.getElementById("nextButton").addEventListener("click", next, false);
document.getElementById("prevNavButton").addEventListener("click", prevNav, false);
document.getElementById("nextNavButton").addEventListener("click", nextNav, false);

var mainDate;
var navDate;
var currentDate;
var monthDays;
var months;
var view;

function setInitial(){
	mainDate = new Date();
	currentDate = new Date();
	navDate = currentDate;
	mainDate=currentDate;
	
	
	monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	view = "month";
	
	populateMonth("monthly", mainDate);
	populateMonth("littleMonthly", navDate);
	populateWeek(mainDate);
}

// Populates a month	
function populateMonth(cal, date) {
	document.getElementById("monthName").innerHTML = months[mainDate.getMonth()]+", "+ mainDate.getFullYear();
	document.getElementById("navMonthName").innerHTML = months[navDate.getMonth()]+", "+ navDate.getFullYear();
	for (var d = monthDays[date.getMonth()]; d > 0; d-=7) {
		var tracker = new Date(date.getFullYear(), date.getMonth(), d);
		populateCal(cal, weekStart(tracker));
	}
	var ws = weekStart(tracker);
	if (ws.getDate() != 1 && ws.getMonth() != date.getMonth()-1){
		tracker = new Date(date.getFullYear(), date.getMonth(), tracker.getDate()-6);
		populateCal(cal, weekStart(tracker));
    }
}

//populates a week
function populateWeek(date) {
	populateCal("weekly", weekStart(date));
}

//finds the start of the week for a given day
function weekStart(date) {
	return new Date(date.getFullYear(), date.getMonth(), (date.getDate()-date.getDay()));
}

// fills calendar with dates	
function populateCal(cal, date) {
	var table = document.getElementById(cal);
	var row = table.insertRow(1);
	
	var tracker=date;
	for (var i = 0; i < 7; i++){
		var cell = row.insertCell(i);
		cell.id =  tracker.getFullYear() + "." + (tracker.getMonth()+1) + "." + tracker.getDate();
		cell.onchange = "enableTxt(this)";
		cell.innerHTML = tracker.getDate();
		tracker = new Date(tracker.getFullYear(), tracker.getMonth(), tracker.getDate()+1);
	}
}

// shows week view when week button is pressed	
function showWeek() {
	document.getElementById("weekly").style.display="table";
	document.getElementById("monthly").style.display="none";
	view = "week";
}

// shows month view when month button is pressed	
function showMonth() {
	document.getElementById("monthly").style.display="table";
	document.getElementById("weekly").style.display="none";
	view = "month";
}

//clears the calendar
function clearTable(tableName) {
	var table = document.getElementById(tableName);
	for(var i = table.rows.length - 1; i > 0; i--)
	{
		table.deleteRow(i);
	}
}

//goes to the previous month or week
function prev() {
	clearTable("weekly");
	clearTable("monthly");
	if (view=="week") {
		mainDate = new Date(mainDate.getFullYear(), mainDate.getMonth(), mainDate.getDate()-7);
		showWeek();
		populateWeek(mainDate);
		populateMonth("monthly", mainDate);
    } else {
		mainDate = new Date(mainDate.getFullYear(), mainDate.getMonth()-1, 1);
		showMonth();
		populateWeek(mainDate);
		populateMonth("monthly", mainDate);
	}
}

//goes to the next month or week
function next() {
	clearTable("weekly");
	clearTable("monthly");
	if (view=="week") {
		mainDate = new Date(mainDate.getFullYear(), mainDate.getMonth(), mainDate.getDate()+7);
		showWeek();
		populateWeek(mainDate);
		populateMonth("monthly", mainDate);
    } else {
		mainDate = new Date(mainDate.getFullYear(), mainDate.getMonth()+1, 1);
		showMonth();
		populateWeek(mainDate);
		populateMonth("monthly", mainDate);
	}
}

function prevNav() {
	clearTable("littleMonthly");
	navDate = new Date(navDate.getFullYear(), navDate.getMonth()-1, 1);
	populateMonth("littleMonthly", navDate);
}

//goes to the next month or week
function nextNav() {
	clearTable("littleMonthly");
	navDate = new Date(navDate.getFullYear(), navDate.getMonth()+1, 1);
	populateMonth("littleMonthly", navDate);
}





//function goToDate() {
//	clearTable("monthly");
//	clearTable("weekly");
//
//	var dropDown = document.getElementById("months");
//	var monthString = dropDown.options[dropDown.selectedIndex].text;
//	var m;
//	for (m in months) {
//		if (monthString.substring(0,3)==months[m]) {
//			var month = m;
//		}
//	}
//	var day = document.getElementById("day").value;
//	var year = document.getElementById("year").value;
//	mainDate = new Date(year, month, day);
//	isLeapYear(mainDate.getFullYear());						
//	showMonth();
//	populateMonth(mainDate);
//	populateWeek(mainDate);
//}