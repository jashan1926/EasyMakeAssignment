import "./App.css";

import { Route, Routes } from "react-router-dom";

import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Page from "./pages/Page";
import Pricing from "./pages/Pricing";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/page" element={<Page></Page>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="/pricing" element={<Pricing></Pricing>}></Route>
			</Routes>
		</>
	);
}
