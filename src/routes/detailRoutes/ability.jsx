import { LoadingSpinner } from "../../components/loading";
import { usePokemons } from "../../hooks/usePokemons";
import { NormalPokemonCard } from "../../components/pokemonComponents/pokemonCards";

export function Ability() {
	const { pokemons, abilityName } = usePokemons('by-ability')
  return (
		<>
		{ pokemons ? (
			<>
				<h1 className="capitalize">Ability: <span className="font-semibold">{abilityName}</span></h1>
				<ul className="grid grid-cols-fit-300 gap-4">
					{pokemons.map((pokemon, index) => (
						<li key={index}>
							<NormalPokemonCard pokemon={pokemon} />	
						</li>
					))}
				</ul>
			</>


		) : (
			<LoadingSpinner />
		)}
		</>
	)
}

