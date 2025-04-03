import styles from "./sidebar.module.css";
import EventCard from "../eventcard";
import PremiumCard from "../premium";   

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
                <EventCard />
            </div>

            <div className={styles.sidebarSection}>
           <PremiumCard/>
            </div>

            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Tags Populares</h3>
                <div className={styles.tagCloud}>
                    <span className={`${styles.tag} ${styles.tagLarge}`}>
                        #memeday
                    </span>
                    <span className={styles.tag}>#programação</span>
                    <span className={`${styles.tag} ${styles.tagMedium}`}>
                        #humor
                    </span>
                    <span className={styles.tag}>#escola</span>
                    <span className={`${styles.tag} ${styles.tagLarge}`}>
                        #trabalhoremoto
                    </span>
                    <span className={styles.tag}>#segundafeira</span>
                    <span className={`${styles.tag} ${styles.tagMedium}`}>
                        #games
                    </span>
                    <span className={styles.tag}>#nofilter</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;