import React from "react";

const FollowersCard = ({ followers, img }) => {
	return (
		<div className="Follow_Card">
			<img className="img1" src={img} alt="user" />
			<div>
				<p>Name: {followers}</p>
			</div>
		</div>
	);
};

export default FollowersCard;
