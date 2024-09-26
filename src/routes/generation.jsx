import { useGeneration } from "../hooks/useGeneration";
import { LoadingSpinner } from "../components/loading";
import { NormalPokemonCard } from "../components/pokemonComponents/pokemonCards";
import { Paginator } from "../components/paginator";

export function Generation() {
	const { genPokemons, genId, updatePage, page } = useGeneration()


	return (
		<main className="p-8">
	
		<section>
			<header>
				<h1 className="font-extrabold">Generation n.{genId} </h1>
			</header>
		</section>

			{ genPokemons ? (
				<div>
					<ul className="grid grid-cols-fit-300 gap-4 ">
						{genPokemons.map((pokemon) => (
							<li key={pokemon.national_index}>
								<NormalPokemonCard pokemon={pokemon} />							
							</li>
						))}
					</ul>
					<Paginator updatePageFnct={updatePage} pageNumber={page}/>
				</div>
			):( 
				<div>
					<h1 className="mb-8">Getting Generation info</h1>
					<LoadingSpinner />
				</div>
			) }
			
		</main>
	)
}