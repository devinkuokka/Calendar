<?php

    $mysqli = new mysqli("localhost", "php_user", "php_pass", "cal");
	
    if ($mysqli -> connect_errno) {
		echo "Connection Failed: %s\n", $mysqli->connect_error;
		exit;
	}
                    
?>