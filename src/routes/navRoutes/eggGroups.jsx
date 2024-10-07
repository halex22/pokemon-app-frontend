/* eslint-disable react/prop-types */
import { eggGroupsCategories } from "../../services/eggGroupsCategories";


export function EggGroups() {
  return (
    <div>
      <h1 className="text-center my-4 font-semibold text-xl">Egg Groups</h1>
      <div className="">
        <ul className="grid  md:grid-cols-2 lg:grid-cols-4">
          {eggGroupsCategories.map((group, index) => (
            <li key={index} >
              <EggGroupCard eggGroup={group} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function EggGroupCard({ eggGroup }) {

  const handleDivClick = () => {
    window.location.href = `/egg-group/${eggGroup.slug}`;
  };
  
  return (
    <div className="p-12 m-6 border-4 rounded-xl hover:border-red-500 cursor-pointer group"
      onClick={handleDivClick} role="button">
      <a href={`/egg-group/${eggGroup.slug}`} className="capitalize group-hover:text-red-600  ">
        <span className="font-extrabold text-lg">
          {eggGroup.name}
        </span>
      </a>
    </div>
  );
}