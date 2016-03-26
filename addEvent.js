$(window).load(function(){
	$('table td').on('click',function(){
		$("#addEvent").modal("show");
		var cellId = ($(this).closest('td').attr('id')).split('.');
		
		var month = ("0" + cellId[1]).slice(-2);
		var day = ("0" + cellId[2]).slice(-2);

		cellDate = cellId[0] + "-" + month + "-" + day;

		$("#eventDate").attr("value", cellDate);;
	});
});

