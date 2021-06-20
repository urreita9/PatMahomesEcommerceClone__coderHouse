import React from "react";
import "./MahomiesSection.css";
import mahomies from "../assets/mahomies.jpg";

const MahomiesSection = () => {
	return (
		<section className='mahomies'>
			<h2 className='mahomies__title'>
				15 <span>AND THE </span> <br /> MAHOMIES
			</h2>
			<div className='mahomies__image__container'>
				<img
					className='topCointainer__backgroundImage2'
					src={mahomies}
					alt=''
					style={{ maxWidth: "100%" }}
				/>
			</div>
		</section>
	);
};

export default MahomiesSection;
