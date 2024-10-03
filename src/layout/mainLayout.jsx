/* eslint-disable react/prop-types */
import { NavBar } from "./navbar";

export function MainLayout({ children }) {
	return (
		<div className="">
			<NavBar />
			<main className="">
				{ children }
			</main>
		</div>
	)
}