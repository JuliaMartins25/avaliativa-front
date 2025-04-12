import styles from "./premium.module.css";

const Premium = ( {list1, list2, list3, list4}) => {
    return(
    <div>
        <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
        <div className={styles.premiumCard}>
            <h4 className={styles.premiumTitle}>
                Desbloqueie recursos exclusivos!
            </h4>
            <ul className={styles.premiumFeatures}>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
            </ul>
            <button className={styles.premiumButton}>
                Experimentar Grátis
            </button>
        </div>
        </div>
    )
}

export default Premium;