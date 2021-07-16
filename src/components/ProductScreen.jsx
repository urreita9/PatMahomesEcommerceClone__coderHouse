import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "./context/CartContext";
import Header from "./Header";
import ProductCard from "./ProductCard";
import ProductListContainer from "./ProductListContainer";
import MoreProducts from "./MoreProducts";

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	const { productId } = useParams();
	const { products } = useContext(CartContext);
	useEffect(() => {
		setProduct(products.find((product) => product.id === productId));
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
