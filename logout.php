<?php
    session_start();
    session_destroy();				            //logs user out
  
	echo json_encode(array(
			"success" => true,
			"msg" => "You have been successfully logged out"
	));
?>