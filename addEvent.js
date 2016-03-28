$(window).load(function(){
	$('table td').on('click',function(){
		$("#addEvent").modal("show");
		var cellId = ($(this).closest('td').attr('id'));

		$("#eventDate").attr("value", cellId);;	
	});

	$('#eventSubmit').click(function(){
		var ecreator = username;
		var ename = $('#eventName').val();
		var edate = $('#eventDate').val();
		var ecat = $('#eventCat').val();
		var estart = $('#eventStartTime').val();
		var eend = $('#eventEndTime').val();
		
		if (ecreator == "") {
            alert("Please login or make an account");
        } else {
			$.ajax({
				type: "POST",
				url: "addEventScript.php",
				dataType:'json',
				data: { creator: ecreator, cat: ecat, name: ename, date: edate, start: estart, end: eend },
				success: function(rtnData){
					if (rtnData.success) {
						var cell = rtnData.cellId;
						var event = "<li>" + rtnData.msg + "</li>";
						$(cell).append(event);
                    } else {
						alert(rtnData.msg);
					}
				}
			});
		}
	});
});

