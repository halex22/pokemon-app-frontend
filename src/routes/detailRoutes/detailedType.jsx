import { usePagedFetchData } from "../../hooks/useFechData"
import { NormalPokemonCard } from "../../components/pokemonComponents/pokemonCards"
import { LoadingSpinner } from "../../components/loading"

export function DetailType() {
  const {data: pokemons, increasePageNumber  } = usePagedFetchData('by-type')



    return (
        <>
        {pokemons ? (
          <div className="p-4">
            <ul id="list-container" className="grid grid-cols-fit-300 gap-4">
            {pokemons.map((pokemon) => (
              <li key={pokemon.national_index} className="border-2 rounded-xl">
                <NormalPokemonCard pokemon={pokemon}/>
              </li>
            ))}

            </ul>
          <div>
            <button onClick={increasePageNumber}>Load more pokemons</button>
          </div>

          </div>
        ) : (
          <LoadingSpinner />
        )}
        </>
    )
}