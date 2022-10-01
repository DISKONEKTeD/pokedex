import styles from "./Navigation.module.scss"
const Navigation = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.li}>All</li>
                <li className={styles.li}>Bag</li>
            </ul>
        </nav>
    )
}

export default Navigation