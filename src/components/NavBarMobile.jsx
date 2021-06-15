import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemListContainer from "./ItemListContainer";

const NavBarMobile = ({ items, mobile }) => {
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const handleMenuClick = () => {
		setIsMenuClicked(!isMenuClicked);
	};
	return (
		<>
			<div className='navBar'>
				<div className='navBar__left'>
					<div className='menuIcon' onClick={handleMenuClick}>
						{isMenuClicked ? <ClearIcon /> : <MenuIcon />}
					</div>
				</div>
				{/* <div className='mobileMenu'></div> */}
				<div className='navBar__right'>
					<div className='navBar__right__cart'>
						<ShoppingCartIcon />
						<div className='navBar__right__cart__itemsCount'>0</div>
					</div>
				</div>
			</div>
			{/* {isClicked && <NavMobile items={menuItems} />} */}
			{isMenuClicked && <ItemListContainer items={items} mobile={mobile} />}
		</>
	);
};

export default NavBarMobile;
