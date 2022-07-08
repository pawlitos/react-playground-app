import logo from '../../logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>React Playground</span>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ul className={styles.menuList}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Tab1</a></li>
        <li><a href="/">Tab2</a></li>
        <li><a href="/">Tab3</a></li>
      </ul>
    </header>
  );
};

export default Header;
