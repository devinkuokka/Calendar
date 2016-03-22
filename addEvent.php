<!-- create event modal -->
<div id="addEvent" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Add new event...</h4>
			</div>
			
			<div class="modal-body">
				<div class="form-group">
						<label class="control-label col-sm-2" for="eventName">What:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="eventName" placeholder = "Enter a event name" maxlength = "255" autocomplete = "off" required autofocus>
						</div>
					</div>
					
					<div class="form-group">
						<label class="control-label col-sm-2" for="eventTime">When:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="eventTime" placeholder = "Enter a password" maxlength = "13" autocomplete = "off" required>
						</div>
					</div>
			</div>
			
			<div class="modal-footer">
				<button id="eventSubmit" type="button" class="btn btn-default" data-dismiss="modal">Create Event</button>
			</div>
		</div>
	</div>
</div>
