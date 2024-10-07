/* eslint-disable react/prop-types */
import { typesPalette } from "../services/typesPallette.js"

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