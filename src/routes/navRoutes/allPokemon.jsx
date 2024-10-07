/* eslint-disable react/prop-types */
import { useEditablePagedFetchData } from "../../hooks/useFetchData";
import { LoadingSpinner } from "../../components/loading";
import { CardsSection, AddCardsBtn } from "../../components/pokemonComponents/pokemonCards";
import { UpBtn } from "../../components/upbtn";

export function AllPokemonRoute() {

  const { data: pokemons, pageSize, increasePageNumber, changePageNumberSize, totalObjects, isLoading } = useEditablePagedFetchData('all-pokemon');

  const handleApplyBtn = () => {
    const currentPageSize = document.getElementById('pageSizeValue');
    if (currentPageSize === pageSize) return;
    changePageNumberSize(currentPageSize.value);
  };


  return (
    <>
      <h1 className="text-center text-xl font-bold my-8" id="main-header">All Pokemons</h1>
      <UpBtn />

      {pokemons.length && (
        <div className="p-4">
          <CardsSection pokemonInfoArray={pokemons} />
          <div className="flex justify-end my-2 items-center">
            <p className="font-bold">
              {pokemons.length} pokemons - {totalObjects.current} total
            </p>

          </div>

          <div className="flex justify-between">

            <ChangePageSizeComponent pageSize={pageSize} handleApplyBtn={handleApplyBtn} />
          </div>

          {!isLoading && pokemons.length < totalObjects.current && (
            <AddCardsBtn loaderFnct={increasePageNumber} />
          )}
        </div>
      )}
      {isLoading && <LoadingSpinner />}

    </>
  );
}

function ChangePageSizeComponent({ pageSize, handleApplyBtn }) {
  return (
    <>
      <p className="ms-4 flex items-center justify-end">
        load
        <input type="number" className="w-12 mx-2 border-2" id="pageSizeValue" placeholder={pageSize} />
        more pokemons
        <button className="ms-4 bg-red-400 px-2 py-1 rounded-lg hover:bg-red-400/80" onClick={handleApplyBtn}>
          <span className="text-white font-bold">Apply</span>
        </button>
      </p>
    </>
  );
}
