import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { useAuth } from '../../modules/auth/hooks';
import { Container } from '../Container';
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
              <Link className={styles.link} to="/tab1">
                Tab1
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/tab2">
                Tab2
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/tab3">
                Tab3
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
