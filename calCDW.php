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
	<script src="populateCal.js"></script>
	
</head>

<body>

	<div id="container" class="container-fluid">
		<div id="header" class="row">
			<br>
			<div class="col-sm-4"></div>
			
			<div id="viewButtons" class="col-sm-4 text-center" >
				<div class="btn-group">
					<button type="button" class="btn btn-success btn-sm">
						<span class="glyphicon glyphicon-triangle-left"></span>
					</button>
					<button id="weekButton" type="button" class="btn btn-success btn-sm">Week</button>
					<button id="monthButton" type="button" class="btn btn-success btn-sm">Month</button>
					<button id="yearButton" type="button" class="btn btn-success btn-sm">Year</button>
					<button type="button" class="btn btn-success btn-sm">
						<span class="glyphicon glyphicon-triangle-right"></span>
					</button>
				</div>
			</div>
			
			<script src = "viewButtons.js"></script>

			<div id="userButtons" class="col-sm-4 text-right">
				<?php require_once "userButtons.php"?>
			</div>
			
			<script src = "userButtons.js"></script>
		</div>
	  
		<div id="main" class="row">
			<div id="nav" class="col-sm-2">
				Nav Bar
			</div>
			
			<div id="cal" class="col-sm-10">
				<?php require_once "calTable.html"?>
			</div>
		</div>
	</div>

</body>
</html>