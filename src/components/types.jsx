/* eslint-disable react/prop-types */
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

export function PokemonTypes({ typesArray }) {
	return (
		<ul className="flex">
			{typesArray.map((type, index) => (
				<li key={index} className="me-4">
          <TypeBadget name={type.name}/>
				</li>
			))}
		</ul>
	)
}

export function TypeBadget({ name }) {

  const handleClick = () => {
    window.location.href = `/pokemons/types/${name}`
  }


  return (
    <div className={`${typesPalette[name]} px-3 py-1 rounded-xl cursor-pointer`} onClick={handleClick}>
      <h5 className="capitalize text-gray-50 font-bold">{name}</h5>
    </div>
  )
}