import { LoadingSpinner } from "../../components/loading";
import { CardsSection, AddCardsBtn } from "../../components/pokemonComponents/pokemonCards";
import { usePagedFetchData } from "../../hooks/useFetchData";


export function DetailedAbility() {

  const { data: pokemons, increasePageNumber, isLoading, totalObjects } = usePagedFetchData('by-ability');

  return (
    <>
      {pokemons && (
        <div className="p-4">
          <CardsSection pokemonInfoArray={pokemons}/>
          <div className="flex justify-end my-2">
            <p className="font-bold">
            {pokemons.length} pokemons - {totalObjects.current} total
            </p>
          </div>
          {!isLoading && pokemons.length < totalObjects.current && (
            <AddCardsBtn loaderFnct={increasePageNumber}/>
          )}
        </div>
      )}

      {isLoading && <LoadingSpinner />}
    </>
  )
}
