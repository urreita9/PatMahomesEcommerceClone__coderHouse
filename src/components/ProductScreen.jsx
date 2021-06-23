import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import ProductCard from "./ProductCard";
import ProductListContainer from "./ProductListContainer";
import MoreProducts from "./MoreProducts";
import { getData } from "../helpers/getData";

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	const { productId } = useParams();
	useEffect(() => {
		getData().then((data) => {
			setProduct(data.find((product) => product.id === parseInt(productId)));
		});
	}, [productId]);
	return (
		<div>
			<Header />
			<ProductCard {...product} />
			<MoreProducts />
			<ProductListContainer slider={true} />
		</div>
	);
};

export default ProductScreen;
