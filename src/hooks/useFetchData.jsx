import { useState, useEffect, useRef } from "react";
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
  const [ data, setData ] = useState([])
  const { slug } = useParams()
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ isLoading, setIsLoading ] = useState(true)

  const totalObjects = useRef(0)

  const increasePageNumber = () => {
    setIsLoading(true)
    setPageNumber((prevPageNumber) => prevPageNumber + 1 )
  } 


  useEffect(() => {
    const getData = async () => {
      console.log(slug)
      const response = await fetchPokemon(`${endpoint}/${slug}/?page=${pageNumber}`)
      setData((prevData) => [...prevData, ...response.results])
      console.log(response)
      if (totalObjects.current) return 
      totalObjects.current = response.count
    }
    if (!isLoading) return 
    getData()
    setIsLoading(false)

  }, [endpoint, slug, pageNumber, isLoading])

  return { data, slug, increasePageNumber, isLoading, totalObjects }
}




