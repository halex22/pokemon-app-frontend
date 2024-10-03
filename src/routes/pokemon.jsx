/* eslint-disable react/prop-types */
import { usePokemon } from "../hooks/usePokemon";
import { PokemonTypes } from "../components/types";
import { TypeBadget } from "../components/types";
import { AbilitiesComponent } from "../components/pokemonComponents/abilities";
import { LoadingSpinner } from "../components/loading";

export function Pokemon() {

	const { pokemonInfo: pokemon } = usePokemon()


	return (
		<main>

			{ pokemon ? (

				<>
				<h1 className="capitalize text-2xl text-center my-2">Pokemon: <span className="font-bold">{pokemon.name}</span> </h1>

				<div className="md:flex justify-center">
					<div className="flex justify-center">
						<img className="object-contain"
							src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
							alt={`${pokemon.name} image`}
						/>
					</div>

					<div className="flex flex-col items-center md:justify-center">
						<hgroup>
							<h3 className="font-bold text-lg text-center">Types</h3>
							<PokemonTypes typesArray={pokemon.types} />
						</hgroup>
						<h4 className="my-1">Notional Index:
							<span className="font-bold ms-2">{pokemon.national_index}</span>
						</h4>

						<GenNumComponent number={pokemon.generation_number}/>


						<AbilitiesComponent abilitiesArray={pokemon.abilities}/>

						<h4 className="capitalize my-1">Hidden ability:
							<a href={`/ability/${pokemon.hidden_ability.slug}`}>
								<span className="ms-2 text-blue-600 font-semibold">{pokemon.hidden_ability.name}</span>
							</a>
						</h4>

					</div>

				</div>

				<div className="px-4">
					<h2 className="sr-only">Types Effectiveness</h2>
					<div className="grid md:grid-cols-5 ">
						<div className="col-span-2">
							<EffectivenessComponent typesArray={pokemon.pokemon_type_effect} />
						</div>

						<div className="col-span-3 p-2">

							<section className="border-4 rounded-lg p-2 ">
								<CombatStats stats={pokemon.stats}/>
							</section>

							<section className="mt-8 border-4 rounded-lg p-2" id="Training Stats">
								<h2 className="font-bold text-lg">Training Stats</h2>
								{pokemon.training ? <TrainingComponent trainingStats={pokemon.training}/> : (
									<span>N/A</span>
								)}								
							</section>

							<section className="mt-8 border-4 rounded-lg p-2" id="Breeding Stats">
								{pokemon.breeding ? <BreedingComponent breedingStats={pokemon.breeding}/> : (
									<h2>No Breeding info Available</h2>
								)}
								
							</section>

						</div>
						
					</div>
				</div>

				<div className="flex justify-center mb-8 mt-4 px-4">
					<h2 className="sr-only">Pokedex Entries</h2>
					<PokemonEntries entriesArray={pokemon.pokedex_entries}/>
				</div>
				</>

			) : (
				<LoadingSpinner/>
			)}
		</main>
	)
}


function CombatStats({ stats }) {
	const {attack_min: aMin, attack_max: aMax, attack_base: aBase} = stats
	const {defense_min: dMin, defense_max: dMax, defense_base: dBase} = stats
	const {attack_min: hpMin, attack_max: hpMax, attack_base: hpBase} = stats
	const {attack_min: saMin, attack_max: saMax, attack_base: saBase} = stats
	const {attack_min: sdMin, attack_max: sdMax, attack_base: sdBase} = stats
	const {attack_min: sMin, attack_max: sMax, attack_base: sBase} = stats


	return (
		<>
			<div className="">
			<h2 className="font-bold">Stats</h2>
			<div className="grid grid-cols-3">
				<InnerTable statName={'attack'} min={aMin} max={aMax} base={aBase}/>
				<InnerTable statName={'defense'} min={dMin} max={dMax} base={dBase}/>
				<InnerTable statName={'HP'} min={hpMin} max={hpMax} base={hpBase}/>
				<InnerTable statName={'special Attack'} min={saMin} max={saMax} base={saBase}/>
				<InnerTable statName={'Special Deffense'} min={sdMin} max={sdMax} base={sdBase}/>
				<InnerTable statName={'Speed'} min={sMin} max={sMax} base={sBase}/>
			</div>
			</div>
		</>
	)
}


function InnerTable({statName, base, max, min}) {
	return (
		<div>
			<h3 className="font-semibold capitalize p-1">{statName}</h3>
			<table>
				<thead>
					<tr>
						<th className="p-1">Base</th>
						<th className="p-1">Min</th>
						<th className="p-1">Max</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{base}</td>
						<td>{max}</td>
						<td>{min}</td>
					</tr>
				</tbody>
			</table>
		</div>

	)
}


function EffectivenessComponent({ typesArray }) {
	return (
		<>
			<table className="mt-2 w-full">
				<thead>
					<tr>
						<th>Effectiveness Category</th>
						<th>Type</th>
						<th>Value</th>
					</tr>					
				</thead>
				<tbody >				
					{typesArray.map((type_effect, index) => (
						<tr key={index} >
							<td className="capitalize">{type_effect.effect_category.name}</td>
							<td><TypeBadget name={type_effect.type.name}/></td>
							<td className="ps-2"> x{type_effect.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}


function PokemonEntries({ entriesArray }) {
	return (
		<>
			<table className="">
				<thead>
					<tr>
						<th>Pokemon Game</th>
						<th>Pokedex Entry</th>
					</tr>
				</thead>
				<tbody>
					{entriesArray.map((entry, index) => (
						<tr key={index} className="border-b-2">
							<td className="capitalize font-semibold pe-2">{entry.pokemon_game.name}</td>
							<td>{entry.entry}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}


function TrainingComponent({ trainingStats }) {
	const growthRateCat = trainingStats.growth_rate.name
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Catch Rate</th>
						<th className="ps-4">Base Exp</th>
						<th className="ps-4">Base Friendship</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{trainingStats.catch_rate}</td>
						<td className="ps-4">{trainingStats.base_exp}</td>
						<td className="ps-4">{trainingStats.base_friendship}</td>
					</tr>
				</tbody>
			</table>
			<h5> <span className="font-bold">Friendship Category</span>: {trainingStats.friendship_category.name} </h5>
			<h5>
				<span className="font-bold me-1">Growth Rate:</span>
				{growthRateCat ? growthRateCat : 'N/A'}

			</h5>
		</>
	)
}


function BreedingComponent({ breedingStats }) {
	const { male, female, genderless } = breedingStats
	const { egg_cycles_category, egg_cycles_value } = breedingStats
	const { egg_groups } = breedingStats
	return (
		<>
			<h2 className="capitalize font-bold text-lg">Breeding Stats</h2>
			<h5>
				<span className="font-semibold">Egg Cycle Category: </span>
				{egg_cycles_category.name} 
			</h5>
			<h5>
				<span className="font-semibold">Egg Cycle Value: </span>
				{egg_cycles_value}
			</h5>
			<h5 className="font-semibold">Egg Group{egg_groups.length > 1 && 's'}🥚:</h5>
			<ul className="flex">
				{egg_groups.map((group, index) => (
					<li key={index} className="capitalize text-blue-700 font-semibold me-4">
						<a href={`/egg-group/${group.slug}`} >{group.name}</a>
					</li>
				))}
			</ul>
			{genderless ? (
				<h5><span className="font-semibold">Gender:</span> genderless</h5>
			): (
				<div>
					<h5 className="font-semibold">Gender</h5>
					<ul>
						<li><span className="font-semibold">Male <GenderEmoji isMale={1} /> </span>: {male}%</li>
						<li><span className="font-semibold">Female <GenderEmoji /> </span>: {female}%</li>
					</ul>
				</div>
			)}
		</>
	)
}


function GenNumComponent({ number }) {
	return (
		<>
		<h4>
			<span className="me-2">Generation:</span>
			<a href={`/pokemon/generation/${number}`} className="text-blue-600 font-semibold">
				{number}
			</a>
		</h4>
		</>
	)
}


function GenderEmoji({ isMale }) {
	const bg = isMale ? 'blue' : 'pink'
	return (
		<span className={`text-white px-1 bg-${bg}-500 rounded-lg font-bold`}>
			{isMale ? '♂️' : '♀️'}
		</span>
	)
}