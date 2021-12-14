// Import React dependencies.
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Tiptap from '../components/Editor.jsx';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

function AddPost({ userInformation }) {
	let navigate = useNavigate();
	function setContent(e) {
		e.preventDefault();

		const htmlContent = e.currentTarget.firstChild.innerHTML;
		const strContent = e.currentTarget.firstChild.innerText.split('\n\n')[0];
		const userName = userInformation.displayName;
		const userId = userInformation.uid;

		const url = `${baseUrl}/create?htmlContent=${htmlContent}&strContent=${strContent}&userName=${userName}&userId=${userId}`;
		axios
			.get(url)
			.then(function (response) {
				navigate('/', { replace: true });
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}
	return (
		<div className="PageWrapper">
			<h1>Add New Post</h1>
			<div className="Editor">
				<Tiptap setContent={setContent} />
			</div>
		</div>
	);
}

export default AddPost;
