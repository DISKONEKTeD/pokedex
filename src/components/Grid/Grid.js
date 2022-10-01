import styles from './Grid.module.scss'
import Avatar from '../Avatar'

const Grid = (props) => {
    const cells = props.pokemon.map(pokemon => <Avatar key={pokemon.id} pokemon={pokemon} />)

    return (
        <div className={styles.grid}>
            {cells}
        </div>
    )
}

export default Grid