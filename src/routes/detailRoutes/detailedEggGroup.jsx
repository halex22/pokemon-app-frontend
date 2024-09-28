import { usePagedFetchData } from "../../hooks/useFetchData";
import { LoadingSpinner } from "../../components/loading";
import { CardsSection, AddCardsBtn } from "../../components/pokemonComponents/pokemonCards";
export function DetailEggGroupRoute() {

  const { data: pokemons, isLoading, totalObjects, increasePageNumber} = usePagedFetchData('by-egg-group')

  return (
    <>

    {isLoading && <LoadingSpinner /> }

    {pokemons.length && (
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
    <h2>Here</h2>
    </>
  );
}