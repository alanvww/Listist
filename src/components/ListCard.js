import React from 'react';

function ListCard({ list }) {
	return (
		<div className="ListCard BGBlur">
			<div className="listTile">{list.strContent.split('\n\n')[0]}</div>
			<p className="ListInfo">
				By <a href={`/user/${list.userID}`}>{list.userName}</a>
			</p>
			<p className="ViewList">
				<a href={`/post/${list.postID}`}>View Post</a>
			</p>
		</div>
	);
}

export default ListCard;
