import React from "react";
import Product from "./Product";
import ProductSkeleton from "./PoductSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SliderContainer.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function SliderContainer({ products, imageLoaded }) {
	return (
		<div className='slider'>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className='mySwiper'
			>
				{imageLoaded
					? products.map((product, index) => {
							return (
								<SwiperSlide key={index}>
									<Product {...product} imageLoaded={imageLoaded} />
								</SwiperSlide>
							);
					  })
					: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
							return (
								<SwiperSlide key={key}>
									<ProductSkeleton key={key} displayProduct='productInGrid' />
								</SwiperSlide>
							);
					  })}
			</Swiper>
		</div>
	);
}
