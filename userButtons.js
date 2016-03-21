$(document).ready(function() {
	$("#loginButton").click(function(){
		$("#loginForm").show();
	});
	
	$("#logoutButton").click(function(){
		<?php
			session_start();
			session_destroy();				//logs user out
		?>
	});
			
	$("#signupButton").click(function(){
		$("#signupForm").show();
	});
});
