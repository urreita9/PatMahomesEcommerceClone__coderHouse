import React, { useContext } from "react";
import CartDisplay from "./CartDisplay";

import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemListContainer from "./ItemListContainer";
import { CartContext } from "./context/CartContext";

const NavBarMobile = ({ items, mobile }) => {
	const {
		cartCounter,
		openCart,
		isMenuClicked,
		handleMenuClick,
		handleCartClick,
	} = useContext(CartContext);

	return (
		<>
			{openCart ? <CartDisplay /> : null}

			<div className='navBar'>
				<div className='navBar__left'>
					<div className='menuIcon' onClick={handleMenuClick}>
						{isMenuClicked ? <ClearIcon /> : <MenuIcon />}
					</div>
				</div>
				{/* <div className='mobileMenu'></div> */}
				<div className='navBar__right'>
					<div className='navBar__right__cart'>
						<div onClick={handleCartClick}>
							<ShoppingCartIcon />
						</div>

						<div className='navBar__right__cart__itemsCount'>{cartCounter}</div>
					</div>
				</div>
			</div>
			{/* {isClicked && <NavMobile items={menuItems} />} */}
			{isMenuClicked && (
				<ItemListContainer
					items={items}
					mobile={mobile}
					clearIcon={<ClearIcon />}
					handleMenuClick={handleMenuClick}
				/>
			)}
		</>
	);
};

export default NavBarMobile;
