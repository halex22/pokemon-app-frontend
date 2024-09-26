import { LoadingSpinner } from "../../components/loading";
import { useFetchData } from "../../hooks/useFechData";

export function AbilitiesRoute() {

  const {data: abilities} = useFetchData('all-abilities/')

  return (
    <>
      {abilities ? (
        <div>
          <h1 className="text-center my-4 font-bold capitalize text-xl">All the abilities</h1>
          <ul className="grid grid-cols-6">
            {abilities.map((ability, index) => (
              <li key={index} className="p-2 hover:text-blue-600 ">
                <a href={`ability/${ability.slug}`} className="capitalize">
                  {ability.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      
    </>
  )
}

