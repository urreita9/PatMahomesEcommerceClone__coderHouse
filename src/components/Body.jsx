import React from "react";
import ProductListContainer from "./ProductListContainer";
import Marquee from "./Marquee";
import BodyTop from "./BodyTop";
import ShopAllSection from "./ShopAllSection";
import MahomiesSection from "./MahomiesSection";
import "./Body.css";

// import Product from "./Product";
// import { products } from "../productsData";

// Importación de imágenes >>> CAMBIAR
// Resolver imágenes de Product
// Componente muy largo >>> Hacer una mayor división.

const Body = ({ cartCounter, setCartCounter }) => {
	return (
		<div className='layout'>
			<div className='body'>
				<BodyTop />
				{/* PRODUCT GRID */}
				<ProductListContainer
					cartCounter={cartCounter}
					setCartCounter={setCartCounter}
					slider={false}
				/>

				<Marquee
					marqueeContainerClassName='body__secondMarquee'
					marqueeTextClassName='body__topContainer__marquee__text'
					dataText='Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •'
				/>
				<ShopAllSection />
				{/* Product Slider */}
				<ProductListContainer
					cartCounter={cartCounter}
					setCartCounter={setCartCounter}
					slider={true}
				/>
				<MahomiesSection />
			</div>
		</div>
	);
};

export default Body;
