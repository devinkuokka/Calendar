<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <title>Calendar</title>
    
	<link rel = "stylesheet" type = "text/css" href="calStyleSheet.css">
	
	<!-- includes jQuery)-->
	<script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	
	<!-- includes dataTables)
	<script src = "https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css"></script>
	<script src = "https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
	-->
	
	<!-- includes buttons)
	
	<script src = "fetchDate.js"></script> -->
	<script src = "printDates.js"></script>
	
</head>

<body>
    <div id = "wrapper">
        
        <div id = "header">
			
			<div id = "viewButtons">	
				<button id = weekButton class = viewButton type = "button">Week</button>
				<button id = monthButton class = viewButton  type = "button">Month</button>
				<button id = yearButton class = viewButton type = "button">Year</button>
				
				<script src = "viewButtons.js"></script>
			</div>
			
			<div id = "userButtons">	
				<button id = loginButton class = userButton type = "button">Login</button>
				<?php include_once "login.html"; ?>
				
				<button id = logoutButton class = userButton type = "button">Logout</button>
				<?php include_once "logout.html"; ?>
				
				<button id = signupButton class = userButton type = "button">Sign Up</button>
				<?php include_once "signup.html"; ?>
				
				<?php require "php_database.php"; ?>
				<script src = "userButtons.js"></script>
			</div>
			
        </div>
        
        <div id = "main">
            
            <div id = "nav">
                Natigation <br>
                Bar 
            </div>
            
            <script></script>
            
            <div id = "cal">
                
				<div id = "weekly">
					<?php include_once "weekly.html"; ?>
                </div>
				
				<div id = "monthly" style = "display:none;">
					<?php include_once "monthly.html"; ?>
                </div>
				
				<div id = "yearly" style = "display:none;">
					<?php include_once "yearly.html"; ?>
                </div>
            </div>
			
        </div>
    </div>
</body>
</html>
