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
				<form id = "eventForm" class="form-horizontal" role="form">
					<div class="form-group">
						<label class="control-label col-sm-2" for="eventName">What:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="eventName" placeholder="Event title" maxlength="255" autocomplete = "off" required >
						</div>
					</div>
					
					<div class="form-group">
						<div class="control-label col-sm-2">When:</div>
						<div id="eventWhen" class="col-sm-10">
							<input type="date" class="form-control" id="eventDate" required>
							<input type="time" class="form-control" id="eventStartTime" required>
							<input type="time" class="form-control" id="eventEndTime" required>
							<input type="hidden" name="token" value="<?php echo $_SESSION['token'];?>" />
							<select id="eventCat">
								<option value="Personal">Personal</option>
								<!-- include other possible cal cat's -->
							</select>
						</div>
					</div>
				</form>
			</div>
			
			<div class="modal-footer">
				<button id="eventSubmit" type="button" class="btn btn-default" data-dismiss="modal">Create Event</button>
			</div>
		</div>
	</div>
</div>
