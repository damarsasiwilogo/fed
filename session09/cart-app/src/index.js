import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<CSSReset />
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
