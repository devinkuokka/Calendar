<?php

	$username = $_POST['username'];			
	$password = $_POST['password'];
	
	if (strlen($username) < 4 || strlen($password) < 4) {
		echo "Please enter a valid username and password";
		exit;
	}
						
	//conect to cal database as php_user
	require 'php_database.php';
				
	$isUser = $mysqli -> prepare ("select password
								  from users
								  where username = '$username'");
				
	if (!$isUser) {
		//echo "Select Query Prep Failed: ", $mysqli -> error;
		echo "Invalid username and/or password";
		exit;
	}
				
	$isUser -> execute();
	$isUser -> bind_result($passwordResult);
	$isUser -> fetch();
	$isUser -> close();
				
	//check that username and password are valid 
	if (!password_verify($password, $passwordResult)) {
		echo "Invalid username and/or password.";
		exit;
	}
				
	$_SESSION['username'] = $username;				//creates and sets the session variable, username
	echo $_SESSION['username'];
	
?>