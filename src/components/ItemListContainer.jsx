import React from "react";
import { Link } from "react-router-dom";
// import "./NavMobile.css";
import "./Header.css";

const ItemListContainer = ({ items, mobile, clearIcon, handleMenuClick }) => {
	return (
		<div className={mobile ? "navMobile" : "navBar__left"}>
			<div onClick={handleMenuClick} className='menuIcon'>
				{clearIcon}
				<span></span>
			</div>

			<ul className={mobile ? "navMobile__list" : "navBar__left__menuItems"}>
				{mobile && (
					<li className='navMobile__list__item'>
						<Link to='/'>HOME</Link>
					</li>
				)}
				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
				>
					<Link to='/all'>SHOP</Link>
				</li>
				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
				>
					<Link to='/about'>ABOUT</Link>
				</li>
				<li
					className={
						mobile ? "navMobile__list__item" : "navBar__left__menuItems__items"
					}
				>
					<Link to='/faq'>FAQ</Link>
				</li>
			</ul>
		</div>
	);
};

export default ItemListContainer;
