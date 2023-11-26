import styles from './styles.module.css';
export const NoResults = () => {
  return (
    <div className={styles.container}>
      The search returned no results, please try again.
    </div>
  );
};
