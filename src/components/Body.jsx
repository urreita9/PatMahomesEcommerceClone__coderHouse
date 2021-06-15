import React from "react";
import "./Body.css";
import backgroundImage from "../assets/background_image.png";
import mobile_background_image from "../assets/1--mobile.png";
import backgroundImage2 from "../assets/mahomes.jpg";
import mahomies from "../assets/mahomies.jpg";
import Product from "./Product";
import { products } from "../productsData";

// Importación de imágenes >>> CAMBIAR
// Resolver imágenes de Product
// Componente muy largo >>> Hacer una mayor división.

const Body = () => {
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
					<div className='body__topContainer__marquee'>
						<p
							className='body__topContainer__marquee__text'
							data-text='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
						STORE OF PATRICK MAHOMES • SHOWTIME •'
						>
							OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL
							MERCH STORE OF PATRICK MAHOMES • SHOWTIME •
						</p>
						<p
							className='body__topContainer__marquee__text'
							data-text='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
						STORE OF PATRICK MAHOMES • SHOWTIME •'
						>
							OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL
							MERCH STORE OF PATRICK MAHOMES • SHOWTIME •
						</p>
						<p
							className='body__topContainer__marquee__text'
							data-text='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
						STORE OF PATRICK MAHOMES • SHOWTIME •'
						>
							OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL
							MERCH STORE OF PATRICK MAHOMES • SHOWTIME •
						</p>
						<p
							className='body__topContainer__marquee__text'
							data-text='OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL MERCH
						STORE OF PATRICK MAHOMES • SHOWTIME •'
						>
							OFFICIAL MERCH STORE OF PATRICK MAHOMES • SHOWTIME • OFFICIAL
							MERCH STORE OF PATRICK MAHOMES • SHOWTIME •
						</p>
					</div>
				</div>
				<div className='body__productGrid'>
					<div className='body__productGrid__first'>
						{/* Deberia de poder mapear los Product */}
						<Product
							title={products[0].title}
							price={products[0].price}
							description={products[0].descriprion}
						/>
					</div>
					<div>
						<Product
							title={products[1].title}
							price={products[1].price}
							description={products[1].descriprion}
						/>
					</div>
					<div>
						<Product
							title={products[4].title}
							price={products[4].price}
							description={products[4].descriprion}
						/>
					</div>
					<div>
						<Product
							title={products[2].title}
							price={products[2].price}
							description={products[2].descriprion}
						/>
					</div>
					<div>
						<Product
							title={products[3].title}
							price={products[3].price}
							description={products[3].descriprion}
						/>
					</div>
					<div className='body__productGrid__last'>
						<Product
							title={products[5].title}
							price={products[5].price}
							description={products[5].descriprion}
						/>
					</div>
				</div>
				<h2 className='body__shopAllTitle'>SHOP ALL</h2>

				<img
					className='body__topCointainer__backgroundImage2'
					src={backgroundImage2}
					alt=''
				/>
				<div className='body__secondMarquee'>
					<p className='body__topContainer__marquee__text'>
						Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •
					</p>
					<p className='body__topContainer__marquee__text'>
						Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •
					</p>
					<p className='body__topContainer__marquee__text'>
						Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •
					</p>
					<p className='body__topContainer__marquee__text'>
						Every experience, good or bad, you have to learn from • Whatever it
						takes to get a win is the biggest thing •
					</p>
				</div>
				{/* Product Slider */}
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
