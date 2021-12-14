import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

function Post() {
	const [listObj, setList] = useState({});
	let { id } = useParams();
	const [listContent, setListContent] = useState();

	useEffect(() => {
		// Get all lists
		axios
			.get(`${url}/list/${id}`)
			.then(function (response) {
				setList(response.data);
				var htmlStr = response.data.htmlContent;
				setListContent(
					htmlStr.substr(htmlStr.indexOf('<ol>'), htmlStr.indexOf('</ol>'))
				);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [id, listContent]);

	return (
		<div className="PageWrapper">
			<h1>{listObj.strContent}</h1>
			<h2>By {listObj.userName}</h2>
			<div
				dangerouslySetInnerHTML={{ __html: listContent }}
				className="BGBlur"
			></div>
		</div>
	);
}

export default Post;
