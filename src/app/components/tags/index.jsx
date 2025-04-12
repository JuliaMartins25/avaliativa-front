import styles from "./tag.module.css";

const Tags = ({ tag1, tag2, tag3, tag4 }) => {
    return (
        <div className={styles.tagCloud}>
            <span className={`${styles.tag} ${styles.tagLarge}`}>
                {tag1}
            </span>
            <span className={styles.tag}>#programação</span>
            <span className={`${styles.tag} ${styles.tagMedium}`}>
                {tag2}
            </span>
            <span className={styles.tag}>#escola</span>
            <span className={`${styles.tag} ${styles.tagLarge}`}>
                {tag3}
            </span>
            <span className={styles.tag}>#segundafeira</span>
            <span className={`${styles.tag} ${styles.tagMedium}`}>
                {tag4}
            </span>
            <span className={styles.tag}>#nofilter</span>
        </div>
    );
};

export default Tags;