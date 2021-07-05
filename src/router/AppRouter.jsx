import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AboutScreen from "../components/AboutScreen";
import CartScreen from "../components/CartScreen";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import ProductScreen from "../components/ProductScreen";
import ShopScreen from "../components/ShopScreen";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomeScreen} />
				<Route exact path='/about' component={AboutScreen} />
				<Route exact path='/all' component={ShopScreen} />
				<Route exact path='/cart' component={CartScreen} />
				<Route exact path='/product/:productId' component={ProductScreen} />

				<Redirect to='/' />
			</Switch>
			<Footer />
		</Router>
	);
};

export default AppRouter;
