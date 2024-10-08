import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Pokemon } from './routes/pokemon.jsx'
// import { Generation } from './routes/generation.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/mainLayout.jsx'
import { AbilitiesRoute } from './routes/navRoutes/abilities.jsx'
import { EggGroups } from './routes/navRoutes/eggGroups.jsx'
import { TypesNav } from './routes/navRoutes/types.jsx'
import { DetailType } from './routes/detailRoutes/detailedType.jsx' 
import { DetailedAbility } from './routes/detailRoutes/detailedAbility.jsx'
import { DetailGeneration } from './routes/detailRoutes/detailGeneration.jsx'
import { DetailEggGroupRoute } from './routes/detailRoutes/detailedEggGroup.jsx'
import { AllPokemonRoute } from './routes/navRoutes/allPokemon.jsx'
import { GenerationsRoute } from './routes/navRoutes/generation.jsx'
import { NotFoundRoute } from './routes/404.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />
  },
  {
    path: 'pokemon/:pokemonSlug',
    element: <Pokemon />
  },
  {
    path: 'pokemon/generation/:slug',
    element: <DetailGeneration /> 
  },
  {
    path: 'ability/:slug',
    element: <DetailedAbility />
  },
  {
    path: 'egg-group/:slug',
    element: <DetailEggGroupRoute />
  },
  {
    path: 'abilities',
    element: <AbilitiesRoute />
  },
  {
    path: 'egg-groups',
    element: <EggGroups />
  },
  {
    path: 'types',
    element: <TypesNav />
  },
  {
    path: 'pokemons/types/:slug',
    element: <DetailType />
  },
  {
    path: 'all-pokemons',
    element: <AllPokemonRoute />
  },
  {
    path: 'pokemon-generations',
    element: <GenerationsRoute />
  }, 
  {
    path: '*',
    element: <NotFoundRoute />
  }
])


createRoot(document.getElementById('root')).render(
  <MainLayout>
    <RouterProvider router={router} />
  </MainLayout>
)
