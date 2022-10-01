import DotLoader from "react-spinners/DotLoader";
import styles from './Loader.module.scss'


const Loader = () => {
    return (
        <div className={styles.container}>
            <DotLoader color={'#ED1729'} size={100}  />
        </div>
    )
}

export default Loader