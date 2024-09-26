/* eslint-disable react/prop-types */
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export function MainLayout({ children }) {
	return (
		<>
			<NavBar />
			{ children }
			<Footer />
		</>
	)
}