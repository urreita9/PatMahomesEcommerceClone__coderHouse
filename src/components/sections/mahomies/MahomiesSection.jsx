import React from "react";
import "./MahomiesSection.css";
import mahomies from "../../../assets/mahomies.jpg";

const MahomiesSection = () => {
	return (
		<section className='mahomies'>
			<div className='mahomies__top'>
				<h2 className='mahomies__title'>
					15 <span>AND THE </span> <br /> MAHOMIES
				</h2>
				<p>
					15 and the Mahomies is dedicated to improving the lives of children.
					The Foundation supports initiatives that focus on the health,
					wellness, and communities in need of resources and other charitable
					causes.
				</p>
			</div>

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
