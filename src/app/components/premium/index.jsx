import styles from "./premium.module.css";

const Premium = () => {
    return(
    <div>
        <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
        <div className={styles.premiumCard}>
            <h4 className={styles.premiumTitle}>
                Desbloqueie recursos exclusivos!
            </h4>
            <ul className={styles.premiumFeatures}>
                <li>Sem anúncios</li>
                <li>Uploads ilimitados</li>
                <li>Ferramentas de edição avançadas</li>
                <li>Estatísticas detalhadas</li>
            </ul>
            <button className={styles.premiumButton}>
                Experimentar Grátis
            </button>
        </div>
        </div>
    )
}

export default Premium;