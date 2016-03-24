$(document).ready(function() {
	$("#prevButton").click(function(){
		if ($("#weekly").is(":visible")) {
			prevWeek();
		}
		
		if ($("#monthly").is(":visible")) {
			prevMonth();
		}
	});
	
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
			
	//$("#yearButton").click(function(){
	//	$("#weekly").hide();
	//	$("#monthly").hide();
	//	$("#yearly").show();
	//});
	
	$("#nextButton").click(function(){
		if ($("#weekly").is(":visible")) {
			nextWeek();
		}
		
		if ($("#monthly").is(":visible")) {
			nextMonth();
		}
	});
});
