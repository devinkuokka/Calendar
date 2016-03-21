$(document).ready(function() {
	$("#loginButton").click(function(){
		modal.open({content: "login.html"});
	});
	
	$("#logoutButton").click(function(){
			session_start();
			session_destroy();				//logs user out
	});
			
	$("#signupButton").click(function(){
		$("#signupForm").show();
	});
});
