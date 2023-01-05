import styles from './styles.module.scss';

export default function() {
  document.title = "404 Not Found";

  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.error404}>4<span className={styles.span404}>0</span>4</h1>
      <h4 className={styles.errorDescription}>Page Not Found</h4>
      <p className={styles.errorText}>It seems like the page you are looking for does not exist</p>
    </div>
  );
}