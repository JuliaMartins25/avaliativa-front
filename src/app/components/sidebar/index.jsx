import styles from "./sidebar.module.css";
import EventCard from "../eventcard";
import PremiumCard from "../premium";
import Tags from "../tags";

const Sidebar = ({upcomingEvent}) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
                {upcomingEvent.map((event) => (
                <EventCard key={event.id}
                event={event} 
                />
            ))}

            </div>

            <div className={styles.sidebarSection}>
                <PremiumCard list1={"Sem anúncios"} list2={"Uploads ilimitados"} list3={"Ferramentas de edição avançadas"} list4={"Estatísticas detalhadas"} />
            </div>

            <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Tags Populares</h3>
                <Tags tag1={"#memeday"} tag2={"#humor"} tag3={"#trabalhoremoto"} tag4={"#games"}/>
            </div>
        </aside>
    );
}

export default Sidebar;