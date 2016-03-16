<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <title>Calendar</title>
    <link rel = "stylesheet" type = "text/css" href="calStyleSheet.css">
</head>
<body>
    <div id = "wrapper">
        
        <div id = "header">
            Title Here
        </div>
        
        <div id = "main">
            
            <div id = "nav">
                Natigation <br>
                Bar 
            </div>
            
            
            
            <script>
                
                (function(){Date.prototype.deltaDays=function(c){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+c)};Date.prototype.getSunday=function(){return this.deltaDays(-1*this.getDay())}})();
                function Week(c){this.sunday=c.getSunday();this.nextWeek=function(){return new Week(this.sunday.deltaDays(7))};this.prevWeek=function(){return new Week(this.sunday.deltaDays(-7))};this.contains=function(b){return this.sunday.valueOf()===b.getSunday().valueOf()};this.getDates=function(){for(var b=[],a=0;7>a;a++)b.push(this.sunday.deltaDays(a));return b}}
                function Month(c,b){this.year=c;this.month=b;this.nextMonth=function(){return new Month(c+Math.floor((b+1)/12),(b+1)%12)};this.prevMonth=function(){return new Month(c+Math.floor((b-1)/12),(b+11)%12)};this.getDateObject=function(a){return new Date(this.year,this.month,a)};this.getWeeks=function(){var a=this.getDateObject(1),b=this.nextMonth().getDateObject(0),c=[],a=new Week(a);for(c.push(a);!a.contains(b);)a=a.nextWeek(),c.push(a);return c}};

                document.addEventListener("DOMContentLoaded", fetchDate, false);
                
                var src = "http://classes.engineering.wustl.edu/cse330/content/weather_json.php"
                
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
                    DEC: 11,
                    properties: {
                        0: {daysIn: 31, daysInLeap: 31},
                        1: {daysIn: 28, daysInLeap: 29},
                        2: {daysIn: 31, daysInLeap: 31},
                        3: {daysIn: 30, daysInLeap: 30},
                        4: {daysIn: 31, daysInLeap: 31},
                        5: {daysIn: 30, daysInLeap: 30},
                        6: {daysIn: 31, daysInLeap: 31},
                        7: {daysIn: 31, daysInLeap: 31},
                        8: {daysIn: 30, daysInLeap: 30},
                        9: {daysIn: 31, daysInLeap: 31},
                        10: {daysIn: 30, daysInLeap: 30},
                        11: {daysIn: 31, daysInLeap: 31},
                    }
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
                    
                    xmlHttp.open("GET", src, true);
                    xmlHttp.addEventListener("load", ajaxCallback, false);
                    xmlHttp.send(null)
                }
                
                function ajaxCallback(event){
                    var jsonData = JSON.parse(event.target.responseText);
    
                    var currentDate = jsonData.current.date.split(" ");
                    
                    var currentWeekday = currentDate[0].slice(0,3);
                    currentWeekday = currentWeekday.toUpperCase();
                    var currentDay = currentDate[1];
                    var currentMonth = currentDate[2];
                    var currentYear = currentDate[3];
                    
                    document.getElementById("1.1").innerHTML = currentYear;
                    
                }
               
                //calculates the doomsday
                function doomsDay(year) {
                    var anchor = anchorDay(year);
                    var lastTwo = year % 100;
                    
                    var a = Math.floor(lastTwo / 12);
                    var b = lastTwo % 12;
                    var c = Math.floor(b / 4);
                    var d = (a + b + c) % 7 + anchor;
                    
                    return d % 7;
                }
                
                //sets anchor say for doomsday algorithm
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
                c}
                
                function isLeapYear(year) {
                    if (year % 4 == 0) {
                        if (year % 100 == 0) {
                            if (year % 400 ==0) {
                                return true;
                            } else {return false;}
                        } else {return true;}
                    } else {return false;}
                }
                
                    
            </script>
            
            <div id = "cal">
                
                <?php
                    //include_once "monthly.html";
                    include_once "weekly.html";
                ?>
                
            </div>
        </div>
    </div>
</body>
</html>
