import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from '../components/ListCard';

const url = process.env.REACT_APP_BACKEND_URL;

function Dashbroad() {
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
			<h1>Dashboard</h1>
			<div className="card-container">
				{lists && lists.map((list, i) => <ListCard list={list} key={i} />)}
			</div>
		</div>
	);
}

export default Dashbroad;
