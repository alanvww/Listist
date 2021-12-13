// Import React dependencies.
import React from 'react';
import { useCallback } from 'react';
import Tiptap from '../components/Editor.jsx';

function AddPost() {
	const setContent = useCallback((e) => {
		e.preventDefault();

		const htmlContent = e.currentTarget.firstChild.innerHTML;
		const strContent = e.currentTarget.firstChild.innerText;

		console.log({ htmlContent, strContent });
	}, []);
	return (
		<div className="PageWrapper">
			<h1>AddPost</h1>
			<div className="Editor">
				<Tiptap setContent={setContent} />
			</div>
		</div>
	);
}

export default AddPost;
