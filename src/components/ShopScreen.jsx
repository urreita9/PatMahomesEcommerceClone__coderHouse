import React, { useEffect } from "react";
import ShopGrid from "./ShopGrid";
import Header from "../components/Header";

import "../App.css";

const ShopScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Header />
			<ShopGrid />
		</div>
	);
};

export default ShopScreen;
