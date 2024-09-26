export async function fetchPokemon(endpoint) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/${endpoint}`)
    if (!response.ok) {
      alert(`HTTP error! Status ${response.status}` )
    }
    const data = await response.json() 
    return data
  } catch (error) {
    console.log(error)
  }
  
}

