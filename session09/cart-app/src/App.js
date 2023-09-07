import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import store from "./store";

const App = () => {
	return (
		<ChakraProvider>
			<CSSReset />
			<Router>
				<div className="App">
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/cart"
							element={<CartPage />}
						/>
					</Routes>
				</div>
			</Router>
		</ChakraProvider>
	);
};

export default App;
