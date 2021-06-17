import React from "react";
import Product from "./Product";
import "./Body.css";

const ProductList = ({ setCartCounter, cartCounter, products }) => {
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

export default ProductList;
