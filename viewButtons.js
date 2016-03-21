$(document).ready(function() {
	$("#weekButton").click(function(){
		$("#monthly").hide();
		$("#yearly").hide();
		$("#weekly").show();
	});
	
	$("#monthButton").click(function(){
		$("#weekly").hide();
		$("#yearly").hide();
		$("#monthly").show();
	});
			
	$("#yearButton").click(function(){
		$("#weekly").hide();
		$("#monthly").hide();
		$("#yearly").show();
	});
});
