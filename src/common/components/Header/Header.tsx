import { Link } from 'react-router-dom';
import { useAuth } from 'modules/auth';
import logo from '../../../../logo.png';
import Container from '../Container';
import styles from './Header.module.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.titleContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            <span className={styles.title}>React Playground</span>
          </div>
          <ul className={styles.menuList}>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/albums">
                Albums
              </Link>
            </li>
            {user && (
              <li>
                <button className={styles.linkButton} onClick={logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
