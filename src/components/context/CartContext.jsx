import React, { useState, useEffect } from "react";
import { createContext } from "react";
import db from "../../firebase/firebase-config";

import Swal from "sweetalert2";

const productsRef = db.collection("products");
const ordersRef = db.collection("orders");
const contactRef = db.collection("contactEmails");

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
	const [mobile, setMobile] = useState(true);

	useEffect(() => {
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

	const createOrder = (
		name,
		phone,
		email,
		adress,
		productsAddedToCart,
		cartTotal
	) => {
		const op = {
			buyer: { name: name, phone: phone, email: email, adress: adress },
			items: productsAddedToCart,
			total: cartTotal,
			date: new Date().getTime(),
		};
		return ordersRef.add(op).then((response) => {
			console.log(response);
			Swal.fire({
				icon: "success",
				title: `Congratulations ${op.buyer.name}!`,
				text: `Great purchase! Your items will be delivered to: ${op.buyer.adress}.`,
				footer: `Operation ID # ${response.id}`,
			});
		});
	};

	const updateStock = (productsAddedToCart) => {
		productsAddedToCart.forEach((product) => {
			const { id, amountAdded, stock } = product;
			return productsRef.doc(id).update({
				stock: stock - amountAdded,
			});
		});
	};

	const createContactEmail = (email) => {
		return contactRef
			.add({ email: email, date: new Date().getTime() })
			.then(({ id }) => console.log(id));
	};
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
		createOrder,
		updateStock,
		createContactEmail,
		mobile,
		setMobile,
	};
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
