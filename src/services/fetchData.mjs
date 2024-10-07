export async function fetchPokemon(endpoint) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/${endpoint}`)
    if (!response.ok) {
      throw new Error('Pokemon not found', {cause: 404})
    }
    const data = await response.json() 
    return data
  } catch (error) {
    if (error.cause === 404) throw error
    throw new Error('Could not connect to server', {cause:500})
  }
  
}

