import React, { useState, useEffect, useContext } from "react";
import NavBarDesktop from "./nav/NavBarDesktop";
import NavBarMobile from "./nav/NavBarMobile";
import "./Header.css";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const { mobile, setMobile } = useContext(CartContext);

	const menuItems = mobile
		? ["HOME", "SHOP", "ABOUT", "FAQ"]
		: ["SHOP", "ABOUT", "FAQ"];

	// Dependiendo del ancho de la pantalla renderizamos Navbar para mobile o desktop. Este renderizado condicional
	// en base al window.innerWidth puede que sea provisorio y haya una manera mas eficiente de hacerlo.
	// Pasamos menuItems como prop hasta ItemListContainer dependiendo del renderizado de NavBar (mobile tiene
	// un elemento mas en el array de la lista)
	// También pasamos mobile (booleano) como prop para validar si las classNames se corresponden a Desktop o Mobile.

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		screenWidth > 799 ? setMobile(false) : setMobile(true);
	}, [screenWidth]);
	return (
		<>
			{screenWidth > 799 ? (
				<NavBarDesktop items={menuItems} mobile={mobile} />
			) : (
				<NavBarMobile items={menuItems} mobile={mobile} />
			)}
		</>
	);
};

export default Header;
