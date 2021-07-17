import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../../context/CartContext";
import CartDisplay from "../../../cart/CartDisplay";
import ItemListContainer from "./ItemListContainer";
import "../Header.css";

const NavBar = ({ items, mobile }) => {
	const { cartCounter, openCart, handleCartClick } = useContext(CartContext);

	return (
		<>
			{openCart ? <CartDisplay /> : null}

			<div className='navBar'>
				<div className='navBar__left'>
					<ItemListContainer items={items} mobile={mobile} />
				</div>
				<div className='navBar__right'>
					<div className='navBar__right__cart'>
						<div onClick={handleCartClick}>
							<ShoppingCartIcon />
						</div>

						<div className='navBar__right__cart__itemsCount'>{cartCounter}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
