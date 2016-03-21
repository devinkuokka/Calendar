var Month = {
	JAN: 0,
	FEB: 1,
	MAR: 2,
	APR: 3,
	MAY: 4,
	JUN: 5,
	JUL: 6,
	AUG: 7,
	SEP: 8,
	OCT: 9,
	NOV: 10,
	DEC: 11
};

var Weekday = {
	SUN: 0,
	MON: 1,
	TUE: 2,
	WED: 3,
	THU: 4,
	FRI: 5,
	SAT: 6,
};

function fetchDate() {
	var xmlHttp = new XMLHttpRequest();
	
	xmlHttp.open("GET", "http://classes.engineering.wustl.edu/cse330/content/weather_json.php", true);
	xmlHttp.addEventListener("load", ajaxCallback, false);
	xmlHttp.send(null);
}
                
function ajaxCallback(event){
	var jsonData = JSON.parse(event.target.responseText);
    
	var currentDate = jsonData.current.date.split(" ");

	var currentWeekdayString = currentDate[0].slice(0,3);
	var currentDayString = currentDate[1];
	var currentMonthString = currentDate[2];
	var currentYearString = currentDate[3];
	
	var currentDay = parseInt(currentDayString);
	var currentYear = parseInt(currentYearString);
	
	switch (currentWeekdayString) {
		case ("Sun"):
			currentWeekday = Weekday.SUN;
			break;
		case ("Mon"):
			currentWeekday = Weekday.MON;
			break;
		case ("Tue"):
			currentWeekday = Weekday.TUE;
			break;
		case ("Wed"):
			currentWeekday = Weekday.WED;
			break;
		case ("Thu"):
			currentWeekday = Weekday.THU;
			break;
		case ("Fri"):
			currentWeekday = Weekday.FRI;
			break;
		case ("Sat"):
			currentWeekday = Weekday.SAT;
			break;
	}
	
	switch (currentMonthString) {
		case ("Jan"):
			currentMonth = Month.JAN;
			break;
		case ("Feb"):
			currentMonth = Month.FEB;
			break;
		case ("Mar"):
			currentMonth = Month.MAR;
			break;
		case ("Apr"):
			currentMonth = Month.APR;
			break;
		case ("May"):
			currentMonth = Month.MAY;
			break;
		case ("Jun"):
			currentMonth = Month.JUN;
			break;
		case ("Jul"):
			currentMonth = Month.JUL;
			break;
		case ("Aug"):
			currentMonth = Month.AUG;
			break;
		case ("Sep"):
			currentMonth = Month.SEP;
			break;
		case ("Oct"):
			currentMonth = Month.OCT;
			break;
		case ("Nov"):
			currentMonth = Month.NOV;
			break;
		case ("Dec"):
			currentMonth = Month.DEC;
			break;
	}
}