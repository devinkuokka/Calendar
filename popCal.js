document.addEventListener("DOMContentLoaded", setInitial, false);
document.getElementById("weekButton").addEventListener("click", showWeek, false);
document.getElementById("monthButton").addEventListener("click", showMonth, false);
document.getElementById("prev").addEventListener("click", prev, false);
document.getElementById("next").addEventListener("click", next, false);

var selectedDate;
var currentDate;
var monthDays;
var months;
var view;

function setInitial(){
	selectedDate = new Date();
	currentDate = new Date();
	selectedDate=currentDate;
	
	monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	view = "month"
	
	populateMonth();
	populateWeek();
}

// Populates a month	
function populateMonth() {
	document.getElementById("visibleMonth").innerHTML = months[selectedDate.getMonth()]+", "+ selectedDate.getFullYear();
	for (var d = monthDays[selectedDate.getMonth()]; d > 0; d-=7) {
		var tracker = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), d);
		populateCal("monthly", weekStart(tracker));
	}
	var ws = weekStart(tracker);
	if (ws.getDate() != 1 && ws.getMonth() != selectedDate.getMonth()-1){
		tracker = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), tracker.getDate()-6);
		populateCal("monthly", weekStart(tracker));
    }
}

//populates a week
function populateWeek() {
	populateCal("weekly", weekStart(selectedDate));
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
		cell.innerHTML = tracker.getDate();
		tracker = new Date(date.getFullYear(), date.getMonth(), tracker.getDate()+1);
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
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()-7);
		showWeek();
		populateWeek();
		populateMonth();
    } else {
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1, 1);
		showMonth();
		populateWeek();
		populateMonth();
	}
}

//goes to the next month or week
function next() {
	clearTable("weekly");
	clearTable("monthly");
	if (view=="week") {
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()+7);
		showWeek();
		populateWeek();
		populateMonth();
    } else {
		selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 1);
		showMonth();
		populateWeek();
		populateMonth();
	}
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
//	selectedDate = new Date(year, month, day);
//	isLeapYear(selectedDate.getFullYear());						
//	showMonth();
//	populateMonth(selectedDate);
//	populateWeek(selectedDate);
//}