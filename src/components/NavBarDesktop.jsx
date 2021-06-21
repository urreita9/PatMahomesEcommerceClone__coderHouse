import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "./CartContext";
import ItemListContainer from "./ItemListContainer";
import "./Header.css";

const NavBar = ({ items, mobile }) => {
	const { cartCounter } = useContext(CartContext);

	return (
		<div className='navBar'>
			<div className='navBar__left'>
				<ItemListContainer items={items} mobile={mobile} />
			</div>
			<div className='navBar__right'>
				<div className='navBar__right__cart'>
					<ShoppingCartIcon />
					<div className='navBar__right__cart__itemsCount'>{cartCounter}</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
