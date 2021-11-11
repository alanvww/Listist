import React from 'react';

function ArticleCard(imageSrc, imageAlt, messagePiece, messageFull) {
	return (
		<div className="ArticleCard">
			<img src={imageSrc} alt={imageAlt} />
			<p>{messagePiece}</p>
		</div>
	);
}

export default ArticleCard;
