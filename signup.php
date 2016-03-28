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
	$passwordHash = password_hash($_POST['password'], PASSWORD_BCRYPT);
	$confirmPassword = $_POST['confirmPassword'];
	
	
	//check that username is valid
	
	//check that password and confirm password match
	if (!password_verify($confirmPassword, $passwordHash)) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Passwords do not match. Please try again."
		));
		session_destroy();
		exit;
	}
	
	//conect to cal database as php_user		
	require 'php_database.php';
	
	$isNewUser = $mysqli -> prepare ("select username
									 from users
									 where username = '$username'");
	
	if (!$isNewUser) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Select Query Prep Failed: %s\n", $mysqli -> error
		));
		session_destroy();
		exit;
	}
	
	$isNewUser -> execute();
	$isNewUser -> bind_result($usernameResult);
	$isNewUser -> fetch();
	$isNewUser -> close();
	
	//check that username is unique
	if ($usernameResult !== null) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Username is already taken. Please try another."
		));
		session_destroy();
		exit;
	} 
	
	$addUser = $mysqli -> prepare ("insert into users (username, password)
								   values ('$username', '$passwordHash')");
	
	if (!$addUser) {
		echo json_encode(array(
				"success" => false,
				"msg" => "Insert Query Prep Failed: %s\n", $mysqli -> error
		));
		sesion_destroy();
		exit;
	}
	 
	$addUser -> bind_param ('ss', $username, $password);
	$addUser -> execute();
	$addUser -> close();
	
	 
	$_SESSION['username'] = $username;				//creates and sets the session variable, username
	
	echo json_encode(array(
			"success" => true,
			"msg" => $username
	));
?>
