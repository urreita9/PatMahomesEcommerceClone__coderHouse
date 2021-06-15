import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemListContainer from "./ItemListContainer";
const NavBar = ({ items, mobile }) => {
	return (
		<div className='navBar'>
			<div className='navBar__left'>
				<ItemListContainer items={items} mobile={mobile} />
			</div>
			<div className='navBar__right'>
				<div className='navBar__right__cart'>
					<ShoppingCartIcon />
					<div className='navBar__right__cart__itemsCount'>0</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
