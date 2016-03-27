$(document).ready(function() {
	
	$("#loginSubmit").click(function(){
		var userVal = $('#loginUser').val();
		var passVal = $('#loginPass').val();
		$.ajax({
            type: "POST",
            url: "login.php", //This is the current doc
            //dataType:'json', // add json datatype to get json
            data: { username: userVal, password: passVal},
            //data: {data: userVal},
            success: function(msg){
                $('#session_username').text(msg);
            }
        });
	});

	$("#signupSubmit").click(function(){
		var userVal = $('#signupUser').val();
		var passVal = $('#signupPass').val();
		var cpassVal = $('#signupCPass').val();
		
		//if (userVal == "" || passVal == "" || cpassVal == "") {
        //    alert("Please enter all fields");
        //} else if (passVal != cpassVal) {
        //    alert("Passwords do not match. Try again.");
        //}
        $.ajax({
            type: "POST",
            url: "signup.php", //This is the current doc
            //dataType:'json', // add json datatype to get json
            data: { username: userVal, password: passVal, confirmPassword: cpassVal},
            //data: {data: userVal},
            success: function(msg){
                $('#session_username').text(msg);
            }
        });  
	});
	
	//if logged in
		//$("#loginButton").hide();
		//$("#signupButton").hide();
		//$("#logoutButton").show();
	
	$("#logoutSubmit").click(function(){
		//destroy session
	});
});
