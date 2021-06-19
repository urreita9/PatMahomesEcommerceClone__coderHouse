import React from "react";
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
				{items.map((item) => {
					return (
						<li
							key={item}
							className={
								mobile
									? "navMobile__list__item"
									: "navBar__left__menuItems__items"
							}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ItemListContainer;
