import { Link } from 'react-router';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.content}>
      <h1>Nothing here. :(</h1>
      <p>The page you’re looking for may have moved or never existed.</p>
      <Link to="/work" style={{ color: 'inherit' }}>
        Back to work
      </Link>
    </section>
  );
}

export default NotFound;
