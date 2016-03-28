<!-- login button that triggers login modal -->
<button id="loginButton" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#loginModal">Login</button>

<!-- login modal -->
<div id="loginModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			
			<div class="modal-body">
				<form id = "loginForm" class="form-horizontal" role="form">
					<div class="form-group">
						<label class="control-label col-sm-2" for="loginUser">Username:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="loginUser" placeholder = "Enter username" required autofocus>
						</div>
					</div>
					
					<div class="form-group">
						<label class="control-label col-sm-2" for="loginPass">Password:</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" id="loginPass" placeholder = "Enter password" required>
						</div>
					</div>
				</form>
			</div>
			
			<div class="modal-footer">
				<button id="loginSubmit" type="submit" class="btn btn-default" data-dismiss="modal" value="Login"></button>
			</div>
		</div>
	</div>
</div>

<?php
//login script 
	if ($_SERVER[$_REQUEST["loginSubmit"]] == "Login") { 	//checks that submit button was clicked
		$username = $_REQUEST['loginUser'];			
		$password = $_REQUEST['loginPass'];
	  

		//conect to mod3_newsWebsite as php_user
		require 'php_database.php';
		
		$isUser = $mysqli -> prepare ("select username, password
									  from users
									  where username = '$username' and password = '$password'");
	   
		if (!$isUser) {
			echo "Select Query Prep Failed: %s\n", $mysqli -> error;
			exit;
		}
		
		$isUser -> execute();
		$isUser -> bind_result($usernameResult, $passwordResult);
		$isUser -> fetch();
		$isUser -> close();
		
		//check that username and password are valid 
		if ($usernameResult == null || $passwordResult == null) {
			printf(
				"<p id = 'warning'>
					Invalid Login. Please try again.
			   </p>"
			);
			exit;
		}

		$_SESSION['user'] = $username;				    	
	}
?>

				
<!-- signup button that triggers signup modal-->
<button id="signupButton" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#signupModal">Sign Up</button>

<!-- signup modal -->
<div id="signupModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			
			<div class="modal-body">
				<form id = "signupForm" class="form-horizontal" role="form">
					<div class="form-group">
						<label class="control-label col-sm-2" for="signupUser">Username:</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="signupUser" placeholder = "Enter a username" maxlength = "20" autocomplete = "off" required autofocus>
						</div>
					</div>
					
					<div class="form-group">
						<label class="control-label col-sm-2" for="signupPass">Password:</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" id="signupPass" placeholder = "Enter a password" maxlength = "13" autocomplete = "off" required>
						</div>
					</div>
					
					<div class="form-group">
						<label class="control-label col-sm-2" for="signupCPass">Confirm:</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" id="signupCPass" placeholder = "Enter password again" maxlength = "13" autocomplete = "off" required>
						</div>
					</div>
				</form>
			</div>
			
			<div class="modal-footer">
				<button id="signupSubmit" type="submit" class="btn btn-default" data-dismiss="modal" value="Create Account"></button>
			</div>
		</div>
	</div>
</div>


<!-- logout button that triggers logout modal -->
<button id="logoutButton" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#logoutModal" style="display:none">Logout</button>

<!-- logout modal -->
<div id="logoutModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<!-- modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			
			<div class="modal-body">
				<p style="text-align: left">Are you sure you want to logout?</p>
			</div>
			
			<div class="modal-footer">
				<button id="logoutSubmit" type="submit" class="btn btn-default" data-dismiss="modal" value="Yes"></button>
			</div>
		</div>
	</div>
</div>

