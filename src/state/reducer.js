import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useGetPokemonByIdQuery } from '../services/pokeapi'
import _ from "lodash"

const initialState = {
    all: [],
    loading: false,
};

export const fetchPokemonAsync = createAsyncThunk(
    'pokemon/fetchIdPokemon',
    async () => {
        const APP_MAX_POKEMON = process.env.REACT_APP_MAX_POKEMON
        const pokemon = []
        for(let i = 1; i < APP_MAX_POKEMON; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
            const response = await axios.get(url)
            pokemon.push(response.data)
        }
        return pokemon
    }
 );

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
      load: (state, action) => {
        state.all = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPokemonAsync.pending, (state) => {
          state.loading =  true
        })
        .addCase(fetchPokemonAsync.fulfilled, (state, action) => {
          state.loading = false
          state.all = action.payload;
        });
    },
  });

  export default pokemonSlice.reducer;
