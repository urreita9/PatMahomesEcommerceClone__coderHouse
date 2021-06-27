import React from "react";
import ShopGrid from "./ShopGrid";
import Header from "../components/Header";
import Footer from "./Footer";
import "../App.css";

const ShopScreen = () => {
	return (
		<div>
			<Header />
			<ShopGrid />
			<Footer />
		</div>
	);
};

export default ShopScreen;
