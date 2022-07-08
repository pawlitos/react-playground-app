import logo from '../../logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>React Playground</span>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
