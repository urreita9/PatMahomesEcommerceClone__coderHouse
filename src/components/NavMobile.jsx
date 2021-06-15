import React from "react";
import "./NavMobile.css";

const NavMobile = () => {
	return (
		<div className='navMobile'>
			<ul className='navMobile__list'>
				<li className='navMobile__list__item'>HOME</li>
				<li className='navMobile__list__item'>SHOP ALL</li>
				<li className='navMobile__list__item'>ABOUT</li>
				<li className='navMobile__list__item'>FAQ</li>
			</ul>
		</div>
	);
};

export default NavMobile;
