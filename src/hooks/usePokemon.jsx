import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/fetchData.mjs";
import { useParams } from "react-router-dom";


export function usePokemon() {
	const [ pokemonInfo, setPokemonInfo ] = useState(null)
	const { pokemonSlug } = useParams()

	useEffect(() => {
		const updatePokemonInfo = async () => {
			const data = await fetchPokemon(pokemonSlug)
			setPokemonInfo(data)
			console.log(data)
		}
		updatePokemonInfo()
	}, [pokemonSlug])

	return { pokemonInfo}
}