import { usePokemons } from "../hooks/usePokemons"
import { LoadingSpinner } from "../components/loading"
import { NormalPokemonCard } from "../components/pokemonComponents/pokemonCards"


export function EggGroupRoute() {
	const { pokemons, slug } = usePokemons('by-egg-group')

	return (
		<>
		<h1>Egg Group {slug}</h1>

		{pokemons ? (
			<div>
				<ul>
				{pokemons.map((pokemon, index) => (
					<li key={index}>
						<NormalPokemonCard pokemon={pokemon}/>
					</li>
				))}
				</ul>
			</div>
		): (
			<LoadingSpinner />

		)}
		</>
	)
}