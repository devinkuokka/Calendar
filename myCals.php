<?php
	session_start();
	
	$user = $_SESSION['username'];
	
	printf("
		<input type='checkbox' name='' value='%s'/>
		$fileName");
?>