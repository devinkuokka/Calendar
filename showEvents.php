<?php
	
	//Display events as soon as they log in
	
	$showEvent = $mysqli -> prepare ("select what, date, start, end, cat
									 from events
									 where creator = '$username'");
	
	if (!$showEvent) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Select Query Prep Failed"
		));
		exit;
	}
	
	$showEvent -> execute();
	$showEvent -> bind_result($name, $date, $start, $end, $cat);
	
	$myArray = array(
		"success" => true,
		"msg" => $username
	);
	
	while ($showEvent -> fetch()) {
		$eventArray = array (
			"name" => $name;
			"date" => $date,
			"start" => $start,
			"end" => $end,
			"cat" => $cat
		);
		array_push ($myArray, $eventArray);
	};
	
	$showEvent -> close();
	
	echo json_encode($myArray);
?>