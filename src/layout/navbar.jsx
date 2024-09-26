import pokeball from '../assets/pokeball.png'

export function NavBar() {
    return (
			<nav className="bg-gradient-to-r from-red-600 to-red-400 flex items-center">
				<div className='max-w-8 ms-2 me-4'>
					<img src={pokeball} alt="pokeball logo" />
				</div>
					<ul className="text-white font-semibold py-3 flex">
						<li className="me-6">Generations</li>
						<li className="me-6">
							<a href="/abilities">Abilities</a>
						</li>
						<li className="me-6">
							<a href="/egg-groups">Egg groups</a>
						</li>
						<li className='me-6'>
							<a href="/types">Types</a>
						</li>
						<li>All pokemons</li>
					</ul>
					<div className='ms-6'>
						<SearchComponent />
					</div>
			</nav>
		)
}

function SearchComponent() {
	return (
		<>
			<input
				type="text"
				className='text-white	bg-transparent border-2 rounded-lg placeholder:text-white'
				placeholder=' search pokemon '
			/>
		</>
	)
}