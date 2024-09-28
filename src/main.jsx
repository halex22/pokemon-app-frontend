import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Pokemon } from './routes/pokemon.jsx'
import { Generation } from './routes/generation.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/mainLayout.jsx'
import { AbilitiesRoute } from './routes/navRoutes/abilities.jsx'
import { EggGroups } from './routes/navRoutes/eggGroups.jsx'
import { TypesNav } from './routes/navRoutes/types.jsx'
import { DetailType } from './routes/detailRoutes/detailedType.jsx' 
import { DetailedAbility } from './routes/detailRoutes/detailedAbility.jsx'
import { DetailEggGroupRoute } from './routes/detailRoutes/detailedEggGroup.jsx'
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
    path: 'pokemon/generation/:genId',
    element: <Generation /> 
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
  }
])


createRoot(document.getElementById('root')).render(
  <MainLayout>
    <RouterProvider router={router} />
  </MainLayout>
)
