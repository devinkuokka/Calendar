<div id="myCalsHeader" class="row">
	<div class="col-xs-12">
		<h5><strong>My Calendars</strong></h5>
	</div>
</div>

<div id="myCalsList" class="row">
	<div class="col-xs-12">
		<input id="myCalPersonal" type="checkbox" value="Personal"> Personal
	</div>
</div>

<div class="row"><br></div><!--blank-->

<div id="myCalsNew" class="row">
	<div class="col-xs-12">
		<button id="newMyCal" type="button" class="btn btn-success btn-xs">New Calendar</button>
	</div>
</div>



<!-- create event modal -->
<div id="addMyCal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Create new calendar...</h4>
			</div>
			
			<div class="modal-body">
				<form id = "myCalForm" class="form-horizontal" role="form">
					<div class="form-group">
						<label class="control-label col-sm-2" for="myCalName">Name:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="myCalName" placeholder="New calendar" maxlength="255" autocomplete="off" required/>
						</div>
					</div>
				</form>
			</div>
			
			<div class="modal-footer">
				<button id="addMyCalSubmit" type="button" class="btn btn-default" data-dismiss="modal">Create Calendar</button>
			</div>
		</div>
	</div>
</div>




<?php
	session_start();
	
	$user = $_SESSION['username'];
	
	//printf("
	//	<input type='checkbox' name='' value='%s'/>
	//	$fileName");
?>