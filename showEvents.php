<?php
	require "php_database.php";
			
	$showEvent = $mysqli -> prepare ("select name, day, month, year, start, end, cat
									 where viewer = '$username'
									 from events");
	
	if (!$showEvent) {
		printf("Select Query Prep Failed: %s\n", $mysqli -> error);
		exit;
	}
	
	$showEvent -> execute();
	$showEvent -> bind_result($name, $day, $month, $year, $start, $end, $cat);
	
	$myArray = array();
	
	while ($showEvent -> fetch()) {
		array_push ($myArray,
			$name <= array(
				"day" <= $day,
				"month" <= $month,
				"year" <= $year,
				"start" <= $start,
				"end" <= $end,
				"cat" <= $cat
			)
		);
	};

	$showEvent -> close();
	echo json_encode($myArray);
?>