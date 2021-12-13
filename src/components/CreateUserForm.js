import React from 'react';

function CreateUserForm({ signUpUser }) {
	return (
		<div className="Form">
			<div className="user-info-container">
				<div className="bg-img"></div>
				<div className="user-info-content">
					<h1>Hi, new friend.</h1>
					<form onSubmit={(e) => signUpUser(e)}>
						<div>
							<input type="displayName" name="displayName" placeholder="Name" />

							<input type="email" name="email" placeholder="Email" />

							<input type="password" name="password" placeholder="Password" />
						</div>
						<button type="submit">Create Account</button>
					</form>
					<p>
						Already have an account? <a href="/login">Log in here</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CreateUserForm;
