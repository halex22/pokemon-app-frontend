/* eslint-disable react/prop-types */
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export function MainLayout({ children }) {
	return (
		<div className="">
			<NavBar />
			<main className="">
				{ children }
			</main>
			<Footer />
		</div>
	)
}