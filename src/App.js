import { useState } from "react";
import AppRouter from "./router/AppRouter";
import { CartContext } from "./components/CartContext";
// import { useState } from "react";
import "./App.css";
// import Body from "./components/Body";
// import Header from "./components/Header";

function App() {
	// Esta aplicación pretende ser un clon de 'https://patrickmahomes.com/'.
	// Si no se corresponde con la consigna del proyecto final sobre un ecommerce, por favor haganmelo saber :)

	// En cuanto a los productos, me tome el trabajo de buscar las imagenes y hacer los objetos que los representan,
	// buscando la data manualmente.
	// Todavía no se muy bien como trabajar las imágenes y si los productos los tendremos que volcar en alguna BD.
	// Circunstancialmente, sirve para avanzar.

	// const [cartCounter, setCartCounter] = useState(0);
	const [cartCounter, setCartCounter] = useState(0);
	const [productsAddedToCart, setProductsAddedToCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);

	return (
		<CartContext.Provider
			value={{
				cartCounter,
				setCartCounter,
				openCart,
				setOpenCart,
				productsAddedToCart,
				setProductsAddedToCart,
			}}
		>
			<AppRouter />
		</CartContext.Provider>
	);
}

export default App;
