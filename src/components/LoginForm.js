import React from 'react';

function LoginForm({ loginUser }) {
	return (
		<div className="Form">
			<div className="user-info-container">
				<div className="bg-img"></div>
				<div className="user-info-content">
					<h1>Welcome Back</h1>
					<form onSubmit={(e) => loginUser(e)}>
						<div>
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
						</div>
						<button type="submit">Login</button>
					</form>
					<p>
						Don't have account yet? <a href="/signup">Sign up here</a>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
