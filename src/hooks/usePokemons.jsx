import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/fetchData.mjs";
import { useParams } from "react-router-dom";

export function usePokemons(endpointInitial) {
	const [pokemons, setPokemons] = useState(null)
	const { slug } = useParams()
	const [abilityName, setAbilityName] = useState(slug)


	useEffect(() => {
		if (abilityName.includes('-')) setAbilityName(abilityName.replace('-', ' '))
			
		const getData =  async () => {
			const endpoint = `${endpointInitial}/${slug}`
			const data = await fetchPokemon(endpoint)
			console.log(data)
			setPokemons(data)

		}
		getData()
	}, [abilityName, endpointInitial, slug])

	return { pokemons, abilityName }
}