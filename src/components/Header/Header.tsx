import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { Container } from '../Container';
import styles from './Header.module.css';

const Header = () => {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tab1">Tab1</Link>
            </li>
            <li>
              <Link to="/tab2">Tab2</Link>
            </li>
            <li>
              <Link to="/tab3">Tab3</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
