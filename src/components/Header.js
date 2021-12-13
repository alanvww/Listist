import React from 'react';

function Header({ logout, loggedIn }) {
	return (
		<header className="Header">
			<div className="Logo">Listist</div>
			<nav>
				{!loggedIn && (
					<>
						<a href="/login">Login</a>
						<a href="/signup">Sign up</a>
					</>
				)}
				{loggedIn && (
					<>
						<a href="/">Dashboard</a>
						<a href="/add-post">Add Post</a>
						<a href="/user/:id">My Profile</a>
						<button onClick={() => logout()}>Log Out</button>
					</>
				)}
			</nav>
		</header>
	);
}

export default Header;
