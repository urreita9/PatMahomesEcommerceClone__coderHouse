import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
	const [cartCounter, setCartCounter] = useState(0);
	const [productsAddedToCart, setProductsAddedToCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);
	const [products, setProducts] = useState([]);
	const [outOfStock, setOutOfStock] = useState(false);
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const values = {
		cartCounter,
		setCartCounter,
		openCart,
		setOpenCart,
		productsAddedToCart,
		setProductsAddedToCart,
		products,
		setProducts,
		outOfStock,
		setOutOfStock,
		isMenuClicked,
		setIsMenuClicked,
	};
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
