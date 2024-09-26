import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../services/fetchData.mjs";

export function useGeneration() {
	const [ genPokemons, setGenPokemons ] = useState(null)
	const { genId } = useParams()
	const [ page, setPage ] = useState(1)

	const updatePage = (pageNumber) => {
		if (pageNumber < 0 || page == pageNumber ) return
		setPage(pageNumber)
	}

	useEffect(() => {
		const updateGenInfo = async () => {
			const endPoint = `by-generation/gen-id-${genId}/?page=${page}`
			const data = await fetchPokemon(endPoint)
			console.log(data)
			setGenPokemons(data.results)
		}
		
		updateGenInfo()
	}, [genId, page])

	return { genPokemons, genId, updatePage, page }
}