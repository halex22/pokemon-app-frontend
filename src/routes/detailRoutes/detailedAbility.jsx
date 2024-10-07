import { LoadingSpinner } from "../../components/loading";
import { CardsSection, AddCardsBtn } from "../../components/pokemonComponents/pokemonCards";
import { usePagedFetchData } from "../../hooks/useFetchData";
import { UpBtn } from "../../components/upbtn";
import { ColoredPokeballSVG } from "../../components/svg/pokeball";

export function DetailedAbility() {

  const { data: pokemons, increasePageNumber, isLoading, totalObjects, errorMessage } = usePagedFetchData('by-ability');

  return (
    <>
      {isLoading && (
        <div className="w-auto h-screen flex flex-col items-center justify-center">

          <LoadingSpinner />
          <strong className="text-lg mt-12">Loading ...</strong>
        </div>
      )}

      {errorMessage && (
        <div className="h-screen w-auto flex flex-col justify-center items-center">
          <ColoredPokeballSVG />
          <strong className="mt-12 text-lg">{errorMessage}</strong>
        </div>
      )}

      {pokemons.length && (
        <div className="p-4">
          <UpBtn />
          <CardsSection pokemonInfoArray={pokemons} />
          <div className="flex justify-end my-2">
            <p className="font-bold">
              {pokemons.length} pokemons - {totalObjects.current} total
            </p>
          </div>
          {!isLoading && pokemons.length < totalObjects.current && (
            <AddCardsBtn loaderFnct={increasePageNumber} />
          )}
        </div>
      )}

    </>
  );
}
