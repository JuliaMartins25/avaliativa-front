import styles from "./sidebar.module.css";
import EventCard from "../eventcard";
import PremiumCard from "../premium";
import Tags from "../tags";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
                <EventCard />
            </div>

            <div className={styles.sidebarSection}>
                <PremiumCard />
            </div>

            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Tags Populares</h3>
                <Tags/>
            </div>
        </aside>
    );
}

export default Sidebar;