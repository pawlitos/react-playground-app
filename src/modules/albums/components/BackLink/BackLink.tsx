import { Link } from 'react-router-dom';
import styles from './BackLink.module.css';

const BackLink = () => {
  return (
    <Link className={styles.link} to="/albums">
      Go back to Albums
    </Link>
  );
};

export default BackLink;
