/* eslint-disable react/prop-types */
import { LoadingSpinner } from "../../components/loading";
import { useFetchData } from "../../hooks/useFetchData";
import { useQuery } from "../../hooks/useQuery";
import { UpBtn } from "../../components/upbtn";


export function AbilitiesRoute() {

  const { data: abilities } = useFetchData('all-abilities/');
  const { searchQuery, handleInputChange, filteredData } = useQuery(abilities);



  return (
    <>
      {abilities ? (
        <div className="top-container">
          <h1 className="text-center my-4 font-bold capitalize text-xl"></h1>
          <div className="flex justify-center">
            <SearchComponent inputValue={searchQuery} handlerFnct={handleInputChange} />
          </div>

          <UpBtn />

          {searchQuery && (
            !filteredData.length ? (<h2 className="text-center font-semibold">Sorry no abilities matched your typed text</h2>) : (
              <div>
                <p className="text-center font-semibold">
                  {filteredData.length} abilit{filteredData.length > 1 ? 'ties' : 'y'} found
                </p>
                <AbilitiesListComponent abilities={filteredData} />
              </div>
            )
          )}
          {!searchQuery && <AbilitiesListComponent abilities={abilities} />}

        </div>
      ) : (
        <LoadingSpinner />
      )}

    </>
  );
}


function SearchIcon() {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        className="m-1"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>

        <g id="SVGRepo_iconCarrier">
          <g clipPath="url(#clip0_15_152)">
            <rect width="24" height="24" fill="white"></rect>
            <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" strokeLinejoin="round"></circle>
            <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path>
          </g>
          <defs>
            <clipPath id="clip0_15_152">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </g>
      </svg>
    </>
  );
}

function AbilitiesListComponent({ abilities }) {

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {abilities.map((ability, index) => (
          <li key={index} className="p-2 ">
            <AbilityCard ability={ability}/>
          </li>
        ))}
      </ul>
    </>
  );
}


function AbilityCard({ ability }) {

  const handleDivClick = () => {
    window.location.href = `ability/${ability.slug}`;
  };

  return (
    <button className="border-2 px-2 py-1 w-full group rounded-xl hover:border-red-500"
      onClick={handleDivClick}>
      <a href={`ability/${ability.slug}`} className="capitalize group-hover:text-red-500 font-bold">
        {ability.name}
      </a>
    </button>
  );
}


function SearchComponent({ inputValue, handlerFnct }) {
  return (
    <>
      <div className="border-2 w-[45%] md:w-[25%] mb-4 ms-4 rounded-xl flex py-1">
        <div ><SearchIcon /></div>
        <input
          type="text"
          placeholder="  Ability name ..."
          value={inputValue && inputValue}
          onChange={handlerFnct}
          className="w-full focus:outline-none "
        />
      </div>
    </>
  );
}