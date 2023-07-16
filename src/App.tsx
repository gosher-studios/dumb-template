import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Home, NotFound } from "./pages/index"
import { createRoot } from "react-dom/client"
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

		</BrowserRouter>
	);
};

let root = document.getElementById("root");
if (root) {
	createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}


