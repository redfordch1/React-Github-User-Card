import React from "react";
import Axios from "axios";
import FollowersCard from "./FollowersCard";

class Followers extends React.Component {
	state = {
		followers: []
	};

	componentDidMount() {
		Axios.get("https://api.github.com/users/redfordch1/followers").then((response) => {
			console.log("ITS WORKING!!", response.data);
			this.setState({
				followers: response.data
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.followers.map((follower) => (
					<FollowersCard key={follower.id} img={follower.avatar_url} followers={follower.login} />
				))}
			</div>
		);
	}
}

export default Followers;
