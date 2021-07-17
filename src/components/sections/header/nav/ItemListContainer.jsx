import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../Header.css";

const ItemListContainer = ({ mobile }) => {
	const { hideMenuOnClick } = useContext(CartContext);

	return (
		<div
			className={
				mobile
					? "navMobile animate__animated animate__fadeInLeft"
					: "navBar__left"
			}
		>
			{/* <div onClick={handleMenuClick} className='menuIcon'>
				{clearIcon}
				<span></span>
			</div> */}

			<ul className={mobile ? "navMobile__list" : "navBar__left__menuItems"}>
				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
					onClick={hideMenuOnClick}
				>
					<Link to='/'>HOME</Link>
				</li>

				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
					onClick={hideMenuOnClick}
				>
					<Link to='/all'>SHOP</Link>
				</li>
				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
					onClick={hideMenuOnClick}
				>
					<Link to='/about'>ABOUT</Link>
				</li>
				{/* <li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
					onClick={hideMenuOnClick}
				>
					<Link to='/faq'>FAQ</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default ItemListContainer;
