import React from "react";
import { makeStyles } from "@material-ui/core";

import Skeleton from "@material-ui/lab/Skeleton";

import "./Product.css";
const useStyles = makeStyles({
	skeletonImage: {
		backgroundColor: "#272C34",
		maxWidth: "100%",
		height: "90%",
		borderRadius: 2,
		objectFit: "contain",
	},
	skeletonText: {
		backgroundColor: "#272C34",
		maxWidth: "100%",
		height: "10%",
		borderRadius: 2,
	},
});

const PoductSkeleton = ({ displayProduct }) => {
	const classes = useStyles();
	return (
		<div className={displayProduct}>
			{/* <Box className={classes.skeleton}>
				<Skeleton variant='rect' width={300} height={300} />
			</Box> */}
			<Skeleton variant='rect' width='100%' className={classes.skeletonImage} />
			<Skeleton variant='text' className={classes.skeletonText} />
		</div>
	);
};

export default PoductSkeleton;
