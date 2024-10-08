/* eslint-disable react/prop-types */

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

const typesPalette = {
  normal: 'bg-gradient-to-r from-gray-200 to-gray-400',
  fire: 'bg-gradient-to-r from-orange-500 to-red-600',
  water: 'bg-gradient-to-r from-blue-400 to-blue-600',
  electric: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
  grass: 'bg-gradient-to-r from-green-400 to-green-600',
  ice: 'bg-gradient-to-r from-blue-200 to-blue-300',
  fighting: 'bg-gradient-to-r from-red-700 to-red-900',
  poison: 'bg-gradient-to-r from-purple-400 to-purple-600',
  ground: 'bg-gradient-to-r from-yellow-700 to-yellow-900',
  flying: 'bg-gradient-to-r from-blue-200 to-blue-400',
  psychic: 'bg-gradient-to-r from-pink-400 to-pink-600',
  bug: 'bg-gradient-to-r from-green-500 to-lime-600',
  rock: 'bg-gradient-to-r from-yellow-600 to-yellow-800',
  ghost: 'bg-gradient-to-r from-purple-700 to-purple-900',
  dark: 'bg-gradient-to-r from-gray-800 to-gray-900',
  dragon: 'bg-gradient-to-r from-indigo-500 to-purple-700',
  steel: 'bg-gradient-to-r from-gray-300 to-gray-500',
  fairy: 'bg-gradient-to-r from-pink-300 to-pink-500',
};

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