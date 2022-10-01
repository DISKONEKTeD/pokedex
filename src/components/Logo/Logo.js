import logo from '../../assets/logo.png'
import styles from './Logo.module.scss';

const Logo = () => {
    return (
    <div className={styles.background}>
        <img src={logo} className={styles.logo} alt="logo" />
    </div>
    )
}

export default Logo