import { useState, useEffect } from "react";
import { fetchPokemon } from "../services/fetchData.mjs";
import { useParams } from "react-router-dom";

export function useFetchData(endPoint) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPokemon(endPoint)
      setData(data)
      console.log(data)
    }
    getData()
  }, [endPoint])

  return { data }
}


export function usePagedFetchData(endpoint) {
  const [ data, setData ] = useState(null)
  const { slug } = useParams()
  const [ pageNumber, setPageNumber ] = useState(1)

  const increasePageNumber = () => {
    let currentPageNumber = pageNumber
    setPageNumber(currentPageNumber++)
  }


  useEffect(() => {
    console.log('getting-info')
    const getData = async () => {
      const response = await fetchPokemon(`${endpoint}/${slug}/?page=${pageNumber}`)
      setData(response.results)
      console.log(response)   
    }
    getData()

  }, [endpoint, slug, pageNumber])

  return { data, slug, increasePageNumber }
}


