import React from "react";
import User from "./components/User";
import Followers from "./components/Followers";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>GitHub User Card</h1>
			<User />
			<Followers />
		</div>
	);
}

export default App;
