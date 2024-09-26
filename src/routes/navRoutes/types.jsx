import { TypeBadget } from "../../components/types"

const typesArray = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark' ,
    'dragon',
    'steel',
    'fairy',
]

export function TypesNav() {
	return (
		<>
		<div className="text-center my-4">
			<h1 className="text-2xl font-semibold">All Pokemon Types</h1>
		</div>

		<ul className="grid grid-cols-4 gap-4">
			{ typesArray.map((type, index) => (
				<li key={index} className="relative">
					<div className="w-[50%]">
						<a href={`/pokemons/types/${type}`}>
							<TypeBadget name={type} />
						</a>
					</div>
				</li>
			))}
		</ul>
		</>
	)
}