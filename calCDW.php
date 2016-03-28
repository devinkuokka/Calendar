<!DOCTYPE html>
<html lang="en">
<head>
	<title>Calendar</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel = "stylesheet" type = "text/css" href="styleSheet.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="addEvent.js"></script>	

</head>

<body>

	<div id="container" class="container-fluid">
		<div id="header" class="row">
			<br>
			<div class="col-xs-2"></div> <!--blank-->
			
			<script src = "viewButtons.js"></script>
			<div id="viewButtons" class="col-xs-3" >
				<?php require_once "viewButtons.html"?>
				<script src="viewButtons.js"></script>
			</div>
			
			<div id="title" class="col-xs-4 text-center">
				<h3 id="monthName"></h3>
			</div>

			<div id="userButtons" class="col-xs-3 text-right">
				<?php require_once "userButtons.php"?>
				<script src = "userButtons.js"></script>
			</div>
		</div>
	  
		<div id="main" class="row">
			<div id="nav" class="col-xs-2">
				<div id="littleCal" class="row">
					<?php require_once "navMonthly.html"?>
				</div>
				
				<div id="myCals" class="row">
					<?php require_once "myCals.php"?>
				</div>
			</div>
			
			<div id="cal" class="col-xs-10">
				<?php
					require_once "calTable.html";
					require_once "addEvent.php";
				?>
				
			</div>
		</div>
	</div>

	<script src="populateCals.js"></script>
</body>
</html>