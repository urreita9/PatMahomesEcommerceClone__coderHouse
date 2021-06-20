import React from "react";
import "./ShopAllSection.css";
import backgroundImage2 from "../assets/mahomes.jpg";

const ShopAllSection = () => {
	return (
		<div className='shopAll__container'>
			<h2 className='shopAll__Title'>SHOP ALL</h2>
			<div className='shopAll__image__container'>
				<img
					className='topCointainer__backgroundImage2'
					src={backgroundImage2}
					alt=''
					style={{ maxWidth: "100%" }}
				/>
			</div>
		</div>
	);
};

export default ShopAllSection;
