/* eslint-disable react/prop-types */
import { useHint } from '../hooks/useHint';
import { PokeballSVG } from '../components/svg/pokeball';
import { DropdownMenu } from './dropDown';

export function NavBar() {

  const goHome = () => {
    window.location.href = '/'
  }

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-between md:justify-start">
      <div className='max-w-8 ms-2 me-4 py-3 cursor-pointer' onClick={goHome}>
        <PokeballSVG />
      </div>
      <div className='hidden md:block'>
        <NavLinks />
      </div>


      <div className='ms-6 '>
        <SearchComponent />
      </div>

      <DropdownMenu />
  
      
    </nav>
  );
}

function SearchComponent() {
  const { hintResult, debouncedUpdateHintResult, hint } = useHint();

  return (
    <div className='relative'>
      <input
        type="text"
        className='text-white px-2	bg-transparent border-2 rounded-lg placeholder:text-white focus:outline-none'
        placeholder=' search pokemon... '
        onChange={debouncedUpdateHintResult}
      />
      {hint && (
        <div className='absolute w-full bg-red-600/70 text-white font-bold px-2 '>
          {hintResult.length ? (
            <SearchResultComponent results={hintResult} />
          ) : (
            <div>No results found...</div>
          )}
        </div>
      )}


    </div>
  );
}


function SearchResultComponent({ results }) {
  return (
    <>
      <span>results</span>
      <ul className='mb-1'>
        {results.map((result, index) => (
          <li key={index} className='hover:border-2 px-2 py-1 '>
            <ResultComponent result={result} />
          </li>
        ))}
      </ul>
    </>
  );
}

function ResultComponent({ result }) {
  const target = `/pokemon/${result.slug}`;

  const handleClick = () => {
    window.location.href = target;
  };

  return (
    <div className='group cursor-pointer' onClick={handleClick}>
      <a href={target}>
        <span className='group-hover:font-extrabold capitalize'>{result.name}</span>
      </a>
    </div>
  );
}


function NavLinks() {
  return (
    <ul className="text-white font-semibold  flex">
      <li className="me-6">
        <a href="/pokemon-generations">Generations</a>
      </li>
      <li className="me-6">
        <a href="/abilities">Abilities</a>
      </li>
      <li className="me-6">
        <a href="/egg-groups">Egg groups</a>
      </li>
      <li className='me-6'>
        <a href="/types">Types</a>
      </li>
      <li>
        <a href="/all-pokemons">All pokemons</a>
      </li>
    </ul>
  );
}

