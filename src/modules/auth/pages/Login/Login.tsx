import { useState } from 'react';
import { Button } from '../../../../components/Button';
import { useAuth } from '../../hooks';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleClick = () => {
    login(username);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Login</h1>
        <div className={styles.content}>
          <div className={styles.parent}>
            <div className={styles.div1}>
              <label htmlFor="login">Login</label>
            </div>
            <div className={styles.div2}>
              <input
                id="login"
                className={styles.inputField}
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className={styles.div3}>
              <label htmlFor="password">Password</label>
            </div>
            <div className={styles.div4}>
              <input
                id="password"
                className={styles.inputField}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className={styles.button}>
            <Button as="input" onClick={handleClick}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;