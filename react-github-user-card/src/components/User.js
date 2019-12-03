import React from "react";
import Axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {
	state = {
		name: []
	};

	componentDidMount() {
		Axios.get("https://api.github.com/users/redfordch1").then((response) => {
			console.log(response.data);
			this.setState({
				name: response.data.name,
				img: response.data.avatar_url,
				bio: response.data.bio
			});
		});
	}

	render() {
		return (
			<div>
				<UserCard user={this.state.name} img={this.state.img} bio={this.state.bio} />
			</div>
		);
	}
}

export default User;
