$(document).ready(function() {
	$("#loginSubmit").click(function(){
		var userVal = $('#loginUser').val();
		var passVal = $('#loginPass').val();
		
	});
	
	
	
	$("#signupSubmit").click(function(){
		var userVal = $('#signupUser').val();
		var passVal = $('#signupPass').val();
		var cpassVal = $('#signupCPass').val();
		
		return {
			userVal: userVal,
			passVal: passVal,
			cpassVal: cpassVal			
		};
	});
	
	
	//if logged in
		//$("#loginButton").hide();
		//$("#signupButton").hide();
		//$("#logoutButton").show();
	
	
	$("#logoutSubmit").click(function(){
		
	});
});
