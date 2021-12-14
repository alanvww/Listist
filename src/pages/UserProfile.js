import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from '../components/ListCard';

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function UserProfile({ userInformation }) {
	let { id } = useParams();

	const [lists, setLists] = useState([]);

	useEffect(() => {
		// Get all lists
		axios
			.get(url)
			.then(function (response) {
				setLists(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [lists]);

	if (!lists) return null;

	return (
		<div className="PageWrapper">
			{userInformation.uid === id ? (
				<>
					<h1>Welcome back, {userInformation.displayName}.</h1>
					<div className="BGBlur">
						<p>Email: {userInformation.email}</p>
						<p>UID: {userInformation.uid}</p>
					</div>
					<h1>My Posts</h1>
				</>
			) : (
				<h1>Posts</h1>
			)}

			<div className="card-container">
				{lists &&
					lists.map(
						(list, i) => list.userId === id && <ListCard list={list} key={i} />
					)}
			</div>
		</div>
	);
}

export default UserProfile;
