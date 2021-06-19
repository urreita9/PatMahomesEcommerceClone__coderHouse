import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ItemListContainer from "./ItemListContainer";

const NavBarMobile = ({ items, mobile, cartCounter }) => {
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
