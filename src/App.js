import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
	// Esta aplicación pretende ser un clon de 'https://patrickmahomes.com/'.
	// Si no se corresponde con la consigna del proyecto final sobre un ecommerce, por favor haganmelo saber :)

	// En cuanto a los productos, me tome el trabajo de buscar las imagenes y hacer los objetos que los representan,
	// buscando la data manualmente.
	// Todavía no se muy bien como trabajar las imágenes y si los productos los tendremos que volcar en alguna BD.
	// Circunstancialmente, sirve para avanzar.

	return (
		<div className='App'>
			<Header />
			<Body />
		</div>
	);
}

export default App;
