$(window).load(function(){
	
	//requires javascript 'session variable' equivalent of username
	
	if (username == "") {
		alert("Please login or make an account");
	} else {
		$.ajax({
			type: "POST",
			url: "addEventScript.php",
			dataType:'json', 
			data: {viewer: username},
			success: function(msg){
				alert(msg);
			}
		});
	}
	
}