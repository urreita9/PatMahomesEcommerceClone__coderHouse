import React, { useContext } from "react";
import ProductListContainer from "./ProductListContainer";
import Marquee from "./Marquee";
import BodyTop from "./BodyTop";
import ShopAllSection from "./ShopAllSection";
import MahomiesSection from "./MahomiesSection";
import "./Body.css";
import { CartContext } from "./context/CartContext";

// import Product from "./Product";
// import { products } from "../productsData";

// Importación de imágenes >>> CAMBIAR
// Resolver imágenes de Product
// Componente muy largo >>> Hacer una mayor división.

const Body = () => {
	const { openCart, isMenuClicked } = useContext(CartContext);
	return (
		<div
			className={`layout  ${openCart && "fixed"} ${
				isMenuClicked ? "hide" : "show"
			}`}
		>
			<div className={`body`}>
				<BodyTop />
				{/* PRODUCT GRID */}
				<ProductListContainer slider={false} />

				<Marquee
					marqueeContainerClassName='body__secondMarquee'
					marqueeTextClassName='body__topContainer__marquee__text'
					dataText='Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •'
				/>
				<ShopAllSection />
				{/* Product Slider */}
				<ProductListContainer slider={true} />
				<MahomiesSection />
			</div>
		</div>
	);
};

export default Body;
