<?php

	session_start();
	
	$username = $_POST['username'];			
	$password = $_POST['password'];
	
	if (strlen($username) < 4 || strlen($password) < 4) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Please enter a valid username and/or password."
		));
		session_destroy();
		exit;
	}
						
	//conect to cal database as php_user
	require 'php_database.php';
				
	$isUser = $mysqli -> prepare ("select username, password
								  from users
								  where username = '$username'");
				
	if (!$isUser) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Select Query Prep Failed: ", $mysqli -> error
		));
		session_destroy();
		exit;
	}
				
	$isUser -> execute();
	$isUser -> bind_result($usernameResult, $passwordResult);
	$isUser -> fetch();
	$isUser -> close();
				
	//check that username and password are valid 
	if ($usernameResult == null || !password_verify($password, $passwordResult)) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Please enter a valid username and/or password."
		));
		session_destroy();
		exit;
	}
				
	$_SESSION['username'] = $username;				//creates and sets the session variable, username
	
	echo json_encode(array(
			"success" => true,
			"msg" => $username
	));
?>