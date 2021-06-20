import React from "react";
import "./Marquee.css";

const Marquee = ({
	marqueeContainerClassName,
	marqueeTextClassName,
	dataText,
}) => {
	return (
		<div className={marqueeContainerClassName}>
			<p className={marqueeTextClassName} data-text={dataText}>
				{dataText}
			</p>
			<p className={marqueeTextClassName} data-text={dataText}>
				{dataText}
			</p>
			<p className={marqueeTextClassName} data-text={dataText}>
				{dataText}
			</p>
			<p className={marqueeTextClassName} data-text={dataText}>
				{dataText}
			</p>
		</div>
	);
};

export default Marquee;
