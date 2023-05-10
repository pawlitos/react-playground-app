import { useState } from 'react';
import { Button, TextInput } from 'common/components';
import { Label, useAuth } from 'modules/auth';
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
        <div className={styles.content}>
          <h1 className={styles.header}>Login</h1>
          <div className={styles.parent}>
            <div>
              <Label htmlFor="login">Login</Label>
            </div>
            <div>
              <TextInput
                id="login"
                type="text"
                placeholder="Enter your login here"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
            </div>
            <div>
              <TextInput
                id="password"
                type="password"
                placeholder="Enter your password here"
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
