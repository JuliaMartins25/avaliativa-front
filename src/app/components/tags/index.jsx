import styles from "./tag.module.css";

const Tags = () => {
    return (
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
    );
};

export default Tags;