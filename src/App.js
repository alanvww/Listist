import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

// Components Imports
import Header from './components/Header';

// Pages Imports
import AddPost from './pages/AddPost';
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Post from './pages/Post';
import UserProfile from './pages/UserProfile';

import firebaseConfig from './components/FirebaseConfig';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userInformation, setUserInformation] = useState({});
	const [errors, setErrors] = useState();

	useEffect(() => {
		// Initialize Firebase
		initializeApp(firebaseConfig);
		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				// Logged In
				setUserInformation(user);
				setLoggedIn(true);
			} else {
				setUserInformation({});
				setLoggedIn(false);
			}
			setLoading(false);
		});
	}, []);

	function logout() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setUserInformation({});
				setLoggedIn(false);
				setErrors();
			})
			.catch((error) => {
				console.warn(error);
				setErrors(error);
			});
	}

	if (loading) return null;

	return (
		<>
			{/* <> is <React.Fragment> */}
			<Header
				logout={logout}
				loggedIn={loggedIn}
				userInformation={userInformation}
			/>
			{errors && <p className="Error PageWrapper">{errors}</p>}
			<Router>
				<Routes>
					<Route
						path="/login"
						element={
							!loggedIn ? (
								<Login
									setLoggedIn={setLoggedIn}
									setUserInformation={setUserInformation}
									setErrors={setErrors}
								/>
							) : (
								<Navigate to={`/user/${userInformation.uid}`} />
							)
						}
					/>
					<Route
						path="/user/:id"
						element={
							loggedIn ? (
								<UserProfile userInformation={userInformation} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route
						path="/signup"
						element={
							!loggedIn ? (
								<CreateUser
									setLoggedIn={setLoggedIn}
									setUserInformation={setUserInformation}
									setErrors={setErrors}
								/>
							) : (
								<Navigate to={`/user/${userInformation.uid}`} />
							)
						}
					/>

					<Route
						path="/"
						element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
					/>
					<Route
						path="/add-post"
						element={
							loggedIn ? (
								<AddPost userInformation={userInformation} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route
						path="/lists/:id"
						element={loggedIn ? <Post /> : <Navigate to="/login" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
