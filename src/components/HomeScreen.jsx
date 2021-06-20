import React, { useState } from "react";
import "../App.css";
import Body from "./Body";
import Header from "./Header";

const HomeScreen = () => {
	const [cartCounter, setCartCounter] = useState(0);

	return (
		<div className='App'>
			<Header cartCounter={cartCounter} />
			<Body setCartCounter={setCartCounter} cartCounter={cartCounter} />
		</div>
	);
};

export default HomeScreen;
