$('#button').click(function() {
    var username = $('#text1').val();
    var pass1 = $('#text2').val();
    var pass2 = $()
    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: { text1: val1, text2: val2 },
        success: function(response) {
            $('#result').html(response);
        }
    });
});

$(document).ready(function() {
	$("#loginSubmit").click(function(){
		var userVal = $('#loginUser').val();
		var passVal = $('#loginPass').val();
		
	});
	
	$("#signupSubmit").click(function(){
		var userVal = $('#signupUser').val();
		var passVal = $('#signupPass').val();
		var cpassVal = $('#signupCPass').val();
        $.ajax({
            url: 'signup.php', //This is the current doc
            type: "POST",
            dataType:'json', // add json datatype to get json
            data: ({username : userVal, password : passVal, confirmPassword : cpassVal}),
            success: function(data){
                alert("request sent");
            }
        });  
	});
	
	
	//if logged in
		//$("#loginButton").hide();
		//$("#signupButton").hide();
		//$("#logoutButton").show();
	
	
	$("#logoutSubmit").click(function(){
		
	});
});
