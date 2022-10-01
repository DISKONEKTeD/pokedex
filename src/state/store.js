import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './reducer'
import { pokeApi } from '../services/pokeapi'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    // generated reducer as a specific top-level slice
    [pokeApi.reducerPath]: pokeApi.reducer
  },
  // enables caching, invalidation, polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
});
