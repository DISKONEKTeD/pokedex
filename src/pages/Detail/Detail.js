import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPokemon } from '../../state/selectors'
import Avatar from '../../components/Avatar'
import Info from '../../components/Info'
import styles from './Detail.module.scss'

const Detail = () => {
  const { id } = useParams()
  const all = useSelector(selectPokemon);
  const pokemon = all[id - 1]
  
  return (
    <main className={styles.detail}>
      <Avatar pokemon={pokemon} />
      <Info pokemon={pokemon} />
    </main>
  )
}

export default Detail