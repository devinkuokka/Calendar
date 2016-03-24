$(document).ready(function() {
	$('table tbody tr  td').on('click',function(){
		$("#addEvent").modal("show");
		//$("#eventDate").val($(this).closest('td').children()[0].textContent);
	});
});

