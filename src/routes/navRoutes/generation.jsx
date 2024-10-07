/* eslint-disable react/prop-types */



export function GenerationsRoute() {
  return (
    <>
      <h1 className="text-center font-semibold text-xl mt-4">Pokemon Generations</h1>
      <ul className="grid grid-cols-fit-300 gap-4">
      {[...Array(9)].map((x, i) =>
        <li key={i}>
          <GenCard genNumber={i}/>
        </li>
       )}
      </ul>      
    </>
  );
}


function GenCard ({ genNumber}) {

  const handleClick = () => {
    window.location.href = `/pokemon/generation/${genNumber + 1}`
  }

  return (
    <>
    <div className="border-4 p-12 m-6 rounded-xl hover:border-red-500 cursor-pointer group" onClick={handleClick}>
      <h2 className="mx-2 group-hover:text-red-500">
        <a href={`/pokemon/generation/${genNumber + 1}`}>
          <span className="font-extrabold text-lg">Generation {genNumber + 1 }</span>
        </a>
      </h2>
    </div>
  </>
  )
}