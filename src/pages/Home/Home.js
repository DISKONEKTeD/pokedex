import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Navigation from './../../components/Navigation'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import Grid from '../../components/Grid'
import { fetchPokemonAsync, selectPokemon, selectPokemonLoading } from '../../state/reducer'

const Home = () => {
  const dispatch = new useDispatch()
  const pokemon = useSelector(selectPokemon)
  const isLoading = useSelector(selectPokemonLoading)
  const [refinedSearchList, setRefinedSearchList] = useState([])

  const setSearchResult = (result) => {
    setRefinedSearchList([...result])
  }

  useEffect(() => {
    if(pokemon.length === 0){
      console.log("fetch")
      dispatch(fetchPokemonAsync())
    }
  }, [dispatch, pokemon])
   
  return (
    <main className="App">
      <Header>
        <Logo />
        <Search setSearchResult={setSearchResult} />
      </Header>
      {isLoading ? <Loader /> : <Grid pokemon={refinedSearchList.length === 0 ? pokemon : refinedSearchList}/>}
    </main>
  )
}

export default Home