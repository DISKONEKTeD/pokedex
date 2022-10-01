import { Link } from 'react-router-dom'
import styles from './Avatar.module.scss';
//sprites.other.official-artwork.front_default
const Avatar = ({pokemon}) => {

    const src = pokemon.sprites.other['official-artwork'].front_default
    const name = pokemon.name
    const id = pokemon.id
    // let src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    
    return (
        <Link to={`/pokemon/${id}`}>
            <div className={styles.cell}>
                <img src={src} className={styles.avatar} alt="pokemon" loading="lazy" />
                <div className={styles.name}>{name}</div>
            </div>
        </Link>
    )
}

export default Avatar