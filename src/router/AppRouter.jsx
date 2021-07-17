import React from "react";
import { ContextProvider } from "../components/context/CartContext";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AboutScreen from "../components/screens/AboutScreen";
import CartScreen from "../components/screens/CartScreen";
import Footer from "../components/sections/footer/Footer";
// import Header from "../components/Header";
import HomeScreen from "../components/screens/HomeScreen";
import ProductScreen from "../components/screens/ProductScreen";
import ShopScreen from "../components/screens/ShopScreen";

const AppRouter = () => {
	return (
		<ContextProvider>
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
		</ContextProvider>
	);
};

export default AppRouter;
