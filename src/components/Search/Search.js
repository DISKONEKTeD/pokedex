import { useState } from "react"
import styles from './Search.module.scss'
import glass from '../../assets/glass.png'
import { selectPokemon } from "../../state/reducer"
import { useSelector } from 'react-redux'

const Search = ({setSearchResult}) => {
    const [term, setTerm] = useState('')
    const pokemon = useSelector(selectPokemon);

    const searchHandle = () => {
        let arr = pokemon.filter(obj => {
            if(obj.name.indexOf(term) > -1 )
                return true
            return false
        })
        setSearchResult(arr)
    }


    const onChangeHandle = (event) => {
        setTerm(event.target.value)
    }

    return (
    <div className={styles.container}>
        <li className={styles.icon}><img src={glass} className={styles.glass} alt="search" /></li>
        {/* <input className={styles.input} type="text" placeholder="search" /> */}
        <input 
            onChange={onChangeHandle } 
            value={term} 
            className={styles.input} 
            type="text"
            placeholder="search"
            onKeyPress={e => (e.key === 'Enter') ? searchHandle() : null} />
    </div>
    )
}

export default Search