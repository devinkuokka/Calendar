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
				success: function(rtnData){
					if (rtnData.success) {
						username = rtnData.msg;
						alert(JSON.stringify(rtnData));

						$.each(rtnData, function(idx, obj){ 
							$.each(obj, function(key, value){
								alert(key + ": " + value);
							});
						});
						
						//show logout button and hide others
						$("#loginButton").hide();
						$("#signupButton").hide();
						$("#logoutButton").show();
                    } else {
						alert(rtnData.msg);
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
				success: function(rtnData){
					if (rtnData.success) {
						username = rtnData.msg;
						
						//show logout button and hide others
						$("#loginButton").hide();
						$("#signupButton").hide();
						$("#logoutButton").show();
                    } else {
						alert(rtnData.msg);
					}
				}
			});
		}
	});
	
	$("#logoutSubmit").click(function(){
		$.ajax({
			type: "POST",
			url: "logout.php",
			dataType:'json', 
			success: function(rtnData){
				if (rtnData.success) {
					alert(rtnData.msg);
					
					//show logout button and hide others
					$("#loginButton").show();
					$("#signupButton").show();
					$("#logoutButton").hide();
				} 
			}
		});
	});
});
