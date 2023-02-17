import styles from './ActivityPlaceholder.module.css';

const ActivityPlaceholder = () => {
  return (
    <div className={styles.loadWrapper}>
      <div className={styles.activity}></div>
    </div>
  );
};

export default ActivityPlaceholder;
