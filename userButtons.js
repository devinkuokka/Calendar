$(document).ready(function() {
	$("#loginSubmit").click(function(){
		var userVal = $('#loginUser').val();
		var passVal = $('#loginPass').val();
		
	});
	
	$("#logoutSubmit").click(function(){
		
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

});
