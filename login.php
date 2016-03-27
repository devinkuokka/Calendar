<?php		

	if (!isset ($_POST['username']) || !isset ($_POST['password'])) {		//checks a username & password were entered
		echo "Please enter all fields";
		exit;
	}
	$username = $_POST['username'];			
	$password = $_POST['password'];
				
				
	//conect to cal database as php_user
	require 'php_database.php';
				
	$isUser = $mysqli -> prepare ("select username, password
								  from users
								  where username = '$username' and password = '$password'");
				
	if (!$isUser) {
		echo "Select Query Prep Failed: %s\n", $mysqli -> error;
		exit;
	}
				
	$isUser -> execute();
	$isUser -> bind_result($usernameResult, $passwordResult);
	$isUser -> fetch();
	$isUser -> close();
				
	//check that username and password are valid 
	if ($usernameResult == null && password_verify($password, $passwordResult)) {
		echo "Invalid Login. Please try again.";
		exit;
	}
				
	$_SESSION['username'] = $username;				//creates and sets the session variable, username
	
	echo $_SESSION['username'];
	
?>