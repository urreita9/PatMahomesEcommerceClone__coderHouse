import React from "react";
import ProductListContainer from "./ProductListContainer";
import Marquee from "./Marquee";
import "./Body.css";
import backgroundImage from "../assets/background_image.png";
import mobile_background_image from "../assets/1--mobile.png";
import backgroundImage2 from "../assets/mahomes.jpg";
import mahomies from "../assets/mahomies.jpg";
// import Product from "./Product";
// import { products } from "../productsData";

// Importación de imágenes >>> CAMBIAR
// Resolver imágenes de Product
// Componente muy largo >>> Hacer una mayor división.

const Body = ({ cartCounter, setCartCounter }) => {
	return (
		<div className='layout'>
			<div className='body'>
				<div className='body__topCointainer'>
					<img
						className='body__topCointainer__backgroundImage'
						src={
							// Debería de poder elevar el state screenWidth desde Header hasta App,
							// y desde App hasta acá
							window.innerWidth > 799
								? backgroundImage
								: mobile_background_image
						}
						alt='PatMahomes_backgroundImage'
					/>
					<h1 className='body__topContainer__title'>
						<span>PATRICK</span> MAHOMES II
					</h1>

					{/*  Marquesina */}
					<Marquee
						marqueeContainerClassName='body__topContainer__marquee'
						marqueeTextClassName='body__topContainer__marquee__text'
						dataText='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
						STORE OF PATRICK MAHOMES • SHOWTIME •'
					/>
				</div>
				{/* PRODUCT GRID */}
				<ProductListContainer
					cartCounter={cartCounter}
					setCartCounter={setCartCounter}
					slider={false}
				/>
				<h2 className='body__shopAllTitle'>SHOP ALL</h2>

				<img
					className='body__topCointainer__backgroundImage2'
					src={backgroundImage2}
					alt=''
				/>
				<Marquee
					marqueeContainerClassName='body__secondMarquee'
					marqueeTextClassName='body__topContainer__marquee__text'
					dataText='Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •'
				/>

				{/* Product Slider */}
				<ProductListContainer
					cartCounter={cartCounter}
					setCartCounter={setCartCounter}
					slider={true}
				/>
				<section className='body__mahomies'>
					<h2 className='body__mahomies__title'>
						15 <span>AND THE </span> <br /> MAHOMIES
					</h2>
					<img
						className='body__topCointainer__backgroundImage2'
						src={mahomies}
						alt=''
					/>
				</section>
			</div>
		</div>
	);
};

export default Body;
