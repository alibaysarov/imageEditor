import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store/index.js";
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ChakraProvider>
			<App />
		</ChakraProvider>
		,
	</Provider>
);
