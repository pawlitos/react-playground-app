import { Link } from 'react-router-dom';
import { useAuth } from 'modules/auth';
import logo from 'assets/images/logo.png';
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
            <li className={styles.linkContainer}>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.linkContainer}>
              <Link className={styles.link} to="/albums">
                Albums
              </Link>
            </li>
            <li className={styles.hamburgerContainer}>
              <button className={styles.linkButtonHamburger}>
                <svg viewBox="0 0 100 78" width="22" height="22" className={styles.hamburger}>
                  <g color="var(--default-font)">
                    <rect width="100" height="18" rx="8" fill="currentcolor"></rect>
                    <rect y="30" width="100" height="18" rx="8" fill="currentcolor"></rect>
                    <rect y="60" width="100" height="18" rx="8" fill="currentcolor"></rect>
                  </g>
                </svg>
              </button>
            </li>
            {user && (
              <li className={styles.linkContainer}>
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
