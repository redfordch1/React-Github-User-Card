import React from "react";

const UserCard = ({ user, img, bio, location }) => {
	return (
		<div className="Card">
			<img className="img1" src={img} alt="user" />
			<div>
				<p>Name: {user}</p>
				<p>Bio: {bio}</p>
				<p>Location: {location}</p>
			</div>
		</div>
	);
};

export default UserCard;
