import { useState, useEffect } from "react";
import { fetchPokemon } from "../services/fetchData.mjs";
import debounce from "lodash.debounce";


export function useHint() {

  const [hint, setHint] = useState('')
  const [hintResult, setResultHint] = useState([])
  // const [isSearching, setIsSearching] = useState(false)
  // const currentHint = useRef('')

  const updateHintResult = (e) => {
    setHint(e.target.value)
  }

  const debouncedUpdateHintResult = debounce(updateHintResult, 500)



  useEffect(() => {
    if (!hint) return
    const getData = async () => {
      const data = await fetchPokemon(`pokemon-hint/${hint}/`)
      setResultHint(data)
      console.log(data)
    }
    getData()


  }, [hint])

  return { hintResult, debouncedUpdateHintResult, hint}
}