<?php
	if (!isset($_POST['creator']) || !isset($_POST['cat']) || !isset($_POST['name']) || 
		!isset($_POST['date']) || !isset($_POST['start']) || !isset($_POST['end'])) {
		
		echo "Please enter all fields";
		exit;
	}
	
	$creator = $_SESSION['creator'];
	$name = $_POST['name'];
	$month = $_POST['date'];
	$cat = $_POST['cat'];
	$start = $_POST['start'];
	$end = $_POST['end'];
	
	require "php_database.php";
					
	$addEvent = $mysqli -> prepare ("insert into events (creator, cat, name, day, month, year, start, end)
									values ('$creator', '$cat', '$name', '$day', '$month', '$year', '$start', '$end')");
					
	if (!$addEvent) {
		echo "Insert Query Prep Failed: %s\n", $mysqli -> error;
		exit;				
	} else { 
		$addEvent -> bind_param ('ssssss', $creator, $cat, $name, $date, $start, $end);
		$addEvent -> execute();
		$addEvent -> close();
					
		echo ("event added");
	}						
?>