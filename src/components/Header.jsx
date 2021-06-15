import React, { useState, useEffect } from "react";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import "./Header.css";

export const Header = ({ cartCounter }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [mobile, setMobile] = useState(true);
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
	console.log(screenWidth);
	return (
		<>
			{screenWidth > 799 ? (
				<NavBarDesktop
					items={menuItems}
					mobile={mobile}
					cartCounter={cartCounter}
				/>
			) : (
				<NavBarMobile
					items={menuItems}
					mobile={mobile}
					cartCounter={cartCounter}
				/>
			)}
		</>
	);
};

export default Header;
