$(window).load(function(){
	var eventDate;
	$('table td').on('click',function(){
		$("#addEvent").modal("show");
		var cellId = ($(this).closest('td').attr('id')).split('.');
		
		var year = cellId[0];
		var month = ("0" + cellId[1]).slice(-2);
		var day = ("0" + cellId[2]).slice(-2);
	
		cellDate = year + "-" + month + "-" + day;
		eventDate = new Date(year, month, day);
		
		$("#eventDate").attr("value", cellDate);;	
	});

	$('#eventSubmit').click(function(){
		var ecreator = $('#session_username').text();
		var ename = $('#eventName').val();
		var emonth = eventDate.getMonth();
		var eday = eventDate.getDate();
		var eyear = eventDate.getFullYear();
		var ecat = $('#eventCat').val();
		var estart = $('#eventStartTime').val();
		var eend = $('#eventEndTime').val();
		
		if (ecreator == "") {
            alert("Please login or make an account");
        } else {
			$.ajax({
				type: "POST",
				url: "addEventScript.php",
				//dataType:'json', // add json datatype to get json
				data: { creator: ecreator, cat: ecat, name: ename, day: eday, month: emonth, year: eyear,
						start: estart, end: eend},
				success: function(msg){
					alert(msg);
				}
			});
		}
	});
});

