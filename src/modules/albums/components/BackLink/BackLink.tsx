import { Link } from 'react-router-dom';
import styles from './BackLink.module.css';

type BackLinkProps = {
  children: string;
};

const BackLink = ({ children }: BackLinkProps) => {
  return (
    <Link className={styles.link} to="/albums">
      {children}
    </Link>
  );
};

export default BackLink;
