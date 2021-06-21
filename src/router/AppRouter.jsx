import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AboutScreen from "../components/AboutScreen";
// import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import ProductScreen from "../components/ProductScreen";
import ShopScreen from "../components/ShopScreen";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/about' component={AboutScreen} />
				<Route exact path='/all' component={ShopScreen} />
				<Route exact path='/product/:productId' component={ProductScreen} />
				<Route exact path='/' component={HomeScreen} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
};

export default AppRouter;
