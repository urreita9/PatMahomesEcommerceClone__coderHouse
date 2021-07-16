import React, { useState, useEffect } from "react";
import { createContext } from "react";
// import { getData } from "../../helpers/getData";
import db from "../../firebase/firebase-config";

const productsRef = db.collection("products");

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
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		// getData().then((data) => {
		// 	setProducts(data);
		// 	setLoading(true);
		// });
		productsRef.onSnapshot((snap) => {
			const dataArray = [];
			snap.forEach((snapJr) => {
				dataArray.push({
					id: snapJr.id,
					...snapJr.data(),
				});
			});
			setProducts(dataArray);
			setLoading(true);
			setImageLoaded(true);
		});
	}, []);
	console.log(products);

	const handleCartClick = () => {
		setOpenCart(!openCart);
	};
	const backToShop = () => {
		setOpenCart(false);
	};
	const handleMenuClick = () => {
		setIsMenuClicked(!isMenuClicked);
	};
	const hideMenuOnClick = () => {
		setIsMenuClicked(false);
	};
	const multiplyPartial = () => {
		const partials = productsAddedToCart.map(
			(element) => element.price * element.amountAdded
		);
		setCartTotal(
			partials.reduce((a, b) => {
				return a + b;
			}, 0)
		);
	};

	const addToCart = (id, stock, title, img, price) => {
		const existInCart = productsAddedToCart.find(
			(product) => product.id === id
		);
		if (stock > 0) {
			if (existInCart) {
				setProductsAddedToCart(
					productsAddedToCart.map((product) =>
						product.id === id
							? {
									...existInCart,
									amountAdded: existInCart.amountAdded + 1,
									// cartPartial: existInCart.amountAdded * existInCart.price,
							  }
							: product
					)
				);
				setCartCounter(cartCounter + 1);
				setOpenCart(true);
			} else {
				setProductsAddedToCart([
					...productsAddedToCart,
					{
						id,
						title,
						img,
						price,
						stock,
						// cartPartial: price,
						amountAdded: 1,
					},
				]);
				setCartCounter(cartCounter + 1);
				setOpenCart(true);
			}
		} else {
			setOutOfStock(true);
		}
	};

	const removeFromCart = (id) => {
		const existInCart = productsAddedToCart.find(
			(product) => product.id === id
		);
		if (existInCart.amountAdded === 1) {
			setProductsAddedToCart(
				productsAddedToCart.filter((product) => product.id !== id)
			);
			setCartCounter(cartCounter - 1);
			// setOutOfStock(false);
		} else {
			setProductsAddedToCart(
				productsAddedToCart.map((product) =>
					product.id === id
						? { ...existInCart, amountAdded: existInCart.amountAdded - 1 }
						: product
				)
			);
			// setOutOfStock(false);
			setCartCounter(cartCounter - 1);
		}
	};

	const createOrder = () => {};
	const values = {
		cartCounter,
		openCart,
		productsAddedToCart,
		products,
		outOfStock,
		setOutOfStock,
		isMenuClicked,
		imageLoaded,
		setImageLoaded,
		loading,
		cartTotal,
		handleCartClick,
		backToShop,
		handleMenuClick,
		hideMenuOnClick,
		multiplyPartial,
		addToCart,
		removeFromCart,
	};
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
