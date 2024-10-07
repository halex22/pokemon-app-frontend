/* eslint-disable react/prop-types */
import { typesPalette } from "../../services/typesPallette.js";

const typesArray = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy',
];


export function TypesNav() {
  return (
    <>
      <div className="text-center my-4">
        <h1 className="text-2xl font-semibold">All Pokemon Types</h1>
      </div>

      <ul className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-24 px-12 md:px-8">
        {typesArray.map((type, index) => (
          <li key={index} className="relative">

            <TypeCard typesName={type}/>
          </li>
        ))}
      </ul>
    </>
  );
}


function TypeCard({ typesName }) {

  const clickHandler = () => {
    window.location.href = `/pokemons/types/${typesName}`
  }

  return (
    <>
      <div
        className={`${typesPalette[typesName]} p-8 rounded-lg text-center cursor-pointer`}
        onClick={clickHandler}
      >
        <a href={`/pokemons/types/${typesName}`}>
          <span className="text-white font-extrabold capitalize">{typesName}</span>
        </a>
      </div>
    </>
  )
}