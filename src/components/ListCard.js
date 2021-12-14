import React from 'react';

function ListCard({ list }) {
	const TITLE = list.strContent;
	return (
		<div className="ListCard BGBlur">
			<div className="listTile">{TITLE}</div>
			<p className="ListInfo">
				By <a href={`/user/${list.userId}`}>{list.userName}</a>
			</p>
			<p className="ViewList">
				<a href={`/lists/${list.id}`}>View Post</a>
			</p>
		</div>
	);
}

export default ListCard;
