import React from 'react';
import { useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import CreateUserForm from '../components/CreateUserForm';

function CreateUser({ setErrors, setLoggedIn, setUserInformation }) {
	const signUpUser = useCallback(
		(e) => {
			e.preventDefault();

			const email = e.currentTarget.email.value;
			const password = e.currentTarget.password.value;
			const displayName = e.currentTarget.displayName.value;

			const auth = getAuth();
			createUserWithEmailAndPassword(auth, email, password, displayName)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					setLoggedIn(true);
					setUserInformation({
						email: user.email,
						displayName: user.displayName,
						uid: user.uid,
						accessToken: user.accessToken,
					});
					setErrors();
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log({ error, errorCode, errorMessage });
					setErrors(errorMessage);
				});
		},
		[setErrors, setLoggedIn, setUserInformation]
	);

	return (
		<div className="PageWrapper centered">
			<CreateUserForm signUpUser={signUpUser} />
		</div>
	);
}

export default CreateUser;
