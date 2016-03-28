$(document).ready(function() {
	
	$("#loginSubmit").click(function(){
		var userVal = $('#loginUser').val();
		var passVal = $('#loginPass').val();
		if (userVal == "" || passVal == "") {
            alert("Please enter all fields");
        } else {
			$.ajax({
				type: "POST",
				url: "login.php",
				dataType:'json',
				data: { username: userVal, password: passVal},
				success: function(data){
					var jsonData = $.parseJSON(data);
					if (jsonData.success) {
						alert (jsonData.msg);
                    } else {
						alert(jsonData.msg);
					}
				}
			});
		}
	});

	$("#signupSubmit").click(function(){
		var userVal = $('#signupUser').val();
		var passVal = $('#signupPass').val();
		var cpassVal = $('#signupCPass').val();
		
		if (userVal == "" || passVal == "" || cpassVal == "") {
            alert("Please enter all fields");
        } else if (passVal != cpassVal) {
            alert("Passwords do not match. Try again.");
        } else {
			$.ajax({
				type: "POST",
				url: "signup.php",
				dataType:'json', 
				data: { username: userVal, password: passVal, confirmPassword: cpassVal},
				success: function(data){
					var jsonData = $.parseJSON(data);
					if (jsonData.success) {
						alert (jsonData.msg);
                    } else {
						alert(jsonData.msg);
					}
				}
			});
		}
	});
	
	//if logged in
		//$("#loginButton").hide();
		//$("#signupButton").hide();
		//$("#logoutButton").show();
	
	$("#logoutSubmit").click(function(){
		//destroy session
	});
});
