import { useState, useEffect} from "react";

export function useQuery(allEntries) {

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])


  const handleInputChange = (e) => setSearchQuery(e.target.value)




  useEffect(() => {
    if (!searchQuery) return
    const filtered = allEntries.filter((ability) => ability.name.includes(searchQuery))

    if (filtered.length && searchQuery) {
      setFilteredData(filtered)
    }

    if (!filtered.length && searchQuery) {
      setFilteredData([])
    }


  }, [searchQuery, allEntries])

  return { searchQuery, handleInputChange, filteredData }
}