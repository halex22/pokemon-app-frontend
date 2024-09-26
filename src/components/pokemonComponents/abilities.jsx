/* eslint-disable react/prop-types */
export function PokemonAbilities({ abilities, hiddenAbility }) {
	return (
		<>
			<h4>Abilities</h4>
			<ul>
				{abilities.map((ability, index) => (
					<li key={index}>{ability.name}</li>
				))}
			</ul>
			{hiddenAbility && <div>
				<h4>Hidden Ability: <span className="font-bold">{hiddenAbility.name}</span> </h4>
			</div>}
		</>
	);
}


export function AbilitiesComponent({ abilitiesArray }) {
	const arrLen = abilitiesArray.length > 1
	return (
		<>
			<h4 className="font-semibold">Abilit{arrLen ? 'ies' : 'y'}</h4>
			<ol className="list-decimal ms-4">
				{abilitiesArray.map((ability, index) => (
					<li key={index} className="text-blue-600 capitalize font-semibold">
						<a href={`/ability/${ability.slug}`}>{ability.name}</a>
					</li>
				))}
			</ol>
		</>
	)
}