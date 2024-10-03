/* eslint-disable react/prop-types */
import { PokemonTypes } from "../types";
import { AbilitiesComponent } from "./abilities";

export function NormalPokemonCard({ pokemon }) {
	return (
		<div className="py-4 grid grid-cols-2 items-center hover:border-red-400">
			<div className="relative max-h-[70%] h-full overflow-hidden me-4">
				<img className="absolute object-contain h-full w-full"
					src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
					alt={`${pokemon.name} image`}
				/>
			</div>
			<div>
				<h2 className="capitalize px-2 text-blue-600 hover:text-lg">
					<a href={`/pokemon/${pokemon.slug}`} className="underline underline-offset-2">{pokemon.name}</a>
				</h2>
				<h4 className="sr-only">Types</h4>
				<PokemonTypes typesArray={pokemon.types} />
				<h4>National Index:
					<span className="font-bold ms-2">{pokemon.national_index}</span>
				</h4>
				<AbilitiesComponent abilitiesArray={pokemon.abilities}/>

			</div>
		</div>
	);
}

export function CardsSection({pokemonInfoArray}) {
	return (
	  <>
	  <ul id="list-container" className="grid grid-cols-fit-300 gap-4">
		{pokemonInfoArray.map((pokemon) => (
		  <li key={pokemon.national_index} className="border-2 rounded-xl hover:border-red-600">
			<NormalPokemonCard pokemon={pokemon} />
		  </li>
		))}
	  </ul>
	  </>
	);
  }
  
 export function AddCardsBtn({ loaderFnct }) {
	return (
	  <div className="flex justify-center mt-4">
		<button onClick={loaderFnct} className="bg-red-500 px-4 py-1 rounded-lg">
		  <span className="text-white font-semibold">Load more pokemons</span>
		</button>
	  </div>
	)
  }

