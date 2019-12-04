import React from "react";
import User from "./components/User";
import Followers from "./components/Followers";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1 className="H1">GitHub User Card</h1>
			<User />
			<h1 className="H1">Followers</h1>
			<Followers />
		</div>
	);
}

export default App;
