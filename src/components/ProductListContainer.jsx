import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getData } from "../helpers/getData";
// import { productsFromFile } from "../productsData";

import "./Body.css";

const ProductListContainer = ({ cartCounter, setCartCounter }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getData().then((data) => setProducts(data));
	}, []);
	return (
		<div className='body__productGrid'>
			{products.slice(0, 6).map((product) => {
				return (
					<Product
						key={product.id}
						img={product.img}
						title={product.title}
						price={product.price}
						description={product.description}
						stock={product.stock}
						cartCounter={cartCounter}
						setCartCounter={setCartCounter}
					/>
				);
			})}
			{console.log(products)}
		</div>
	);
};

export default ProductListContainer;
