import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getData } from "../../helpers/getData";

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
	const [cartCounter, setCartCounter] = useState(0);
	const [productsAddedToCart, setProductsAddedToCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);
	const [products, setProducts] = useState([]);
	const [outOfStock, setOutOfStock] = useState(false);
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getData().then((data) => {
			setProducts(data);
			setLoading(true);
		});
	}, []);

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
		imageLoaded,
		setImageLoaded,
		loading,
		setLoading,
	};
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
