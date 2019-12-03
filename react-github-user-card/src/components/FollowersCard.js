import React from "react";

const FollowersCard = ({ followers, img }) => {
	return (
		<div className="Card">
			<img src={img} alt="user" />
			<p>Name: {followers}</p>
		</div>
	);
};

export default FollowersCard;
