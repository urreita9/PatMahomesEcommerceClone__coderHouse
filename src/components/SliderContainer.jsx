import React from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SliderContainer.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function SliderContainer({
	cartCounter,
	setCartCounter,
	products,
}) {
	return (
		<div className='slider'>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className='mySwiper'
			>
				{products.map((product, index) => {
					return (
						<SwiperSlide key={index}>
							<Product
								// displayProduct='productInGrid'
								key={product.id}
								img={product.img}
								title={product.title}
								price={product.price}
								description={product.description}
								stock={product.stock}
								cartCounter={cartCounter}
								setCartCounter={setCartCounter}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
