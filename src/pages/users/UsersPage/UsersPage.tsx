import { useEffect, useState } from 'react';
import { UserType } from 'modules/users/types';
import { getUsers } from 'services/api/users';
import { AlbumDetailsContainer } from 'modules/albums';
import { UserList } from 'modules/users';
import { Button } from 'common/components';
import styles from './UsersPage.module.css';

const UsersPage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>
        <span className={styles.title}>Users</span>
        <span className={styles.buttonContainer}>
          <Button href="/users/create" variant="outlined">
            Add User
          </Button>
        </span>
      </h1>
      <AlbumDetailsContainer>
        <UserList loading={loading} users={users} />
      </AlbumDetailsContainer>
    </div>
  );
};

export default UsersPage;
