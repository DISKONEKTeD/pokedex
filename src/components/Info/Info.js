import DotLoader from "react-spinners/DotLoader";
import _ from 'lodash'
import styles from './Info.module.scss'


const Info = ({pokemon}) => {
    // height, weight, In Bag, Type1, Type2, Type3, 
    // mock text, Abilities - skill nmae, skill name
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.li}><span className={styles.label}>Height: </span>{pokemon.height}</li>
                <li className={styles.li}><span className={styles.label}>Weight: </span> {pokemon.weight}</li>
                <li className={styles.li}><label><input type="checkbox" /> <span className={styles.label}>In Bag</span></label></li>
                <li className={styles.types}>{(pokemon.types.map((obj) => obj.type.name)).join(', ')}</li>
            </ul>
            <div className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div className={styles.ability}>Abilities</div>
            <ul>
                {pokemon.abilities.map((obj) => <li key={obj} className={styles.abilities}>{obj.ability.name}</li>)}
            </ul>
        </div>
    )
}

export default Info