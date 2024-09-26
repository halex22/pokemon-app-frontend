import { LoadingSpinner } from "../../components/loading"
import { useFetchData } from "../../hooks/useFechData"

export function EggGroups() {

  const {data: eggGroups } = useFetchData('all-egg-groups/')

  return (
    <>
     {eggGroups ? (
      <div>
        <h1>Info</h1>
        <ul className="grid grid-cols-4">
          {eggGroups.map((group, index) => (
            <li key={index} className="p-2 hover:text-blue-600">
              <a href={`/egg-group/${group.slug}`} className="capitalize">
                {group.name}
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