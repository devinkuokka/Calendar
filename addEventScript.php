<?php
	ini_set("session.cookie_httponly", 1);
	session_start();
	
	$previous_ua = @$_SESSION['useragent'];
	$current_ua = $_SERVER['HTTP_USER_AGENT'];
	
	if(isset($_SESSION['useragent']) && $previous_ua !== $current_ua){
		die("Session hijack detected");
	}else{
		$_SESSION['useragent'] = $current_ua;
	}
	
	if (!isset($_POST['creator'])) {
		echo json_encode(array(
			"success" => false,
			"msg" => "Please login or create an account to make events."
		));
		exit;
	}
	
	if (!isset($_POST['cat']) || !isset($_POST['name']) || !isset($_POST['date']) ||
		!isset($_POST['start']) || (strlen($_POST['name']) == 0)) {
		
		echo json_encode(array(
			"success" => false,
			"msg" => "Please enter all fields."
		));
		exit;
	}
	
	$creator = $_POST['creator'];
	$name = $_POST['name'];
	$date = $_POST['date'];
	$cat = $_POST['cat'];
	$start = $_POST['start'];
	$end = $_POST['end'];
	
	require "php_database.php";
					
	$addEvent = $mysqli -> prepare ("insert into events (creator, cat, name, date, start, end)
									values ('$creator', '$cat', '$name', '$date', '$start', '$end')");
					
	if (!$addEvent) {
		echo "Insert Query Prep Failed: %s\n", $mysqli -> error;
		exit;				
	} else { 
		$addEvent -> bind_param ('ssssss', $creator, $cat, $name, $date, $start, $end);
		$addEvent -> execute();
		$addEvent -> close();
		
		echo json_encode(array(
			"success" => true,
			"msg" => $start." ".$name,
			"cellId" => "#".$date
		));
	}						
?>