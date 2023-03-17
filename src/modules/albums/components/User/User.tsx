import { useEffect, useState } from 'react';
import { ActivityPlaceholder } from 'common/components';
import { UserType } from 'modules/albums/types';
import { getUser } from 'services/api/users';
import styles from './User.module.css';

type UserProps = {
  userId: number | undefined;
};

const User = ({ userId }: UserProps) => {
  const [user, setUser] = useState<UserType>({ name: '' });

  useEffect(() => {
    if (userId) {
      getUser(userId).then((res) => {
        setUser(res);
      });
    }
  }, [userId]);

  if (user.name) {
    return <div className={styles.user}>by {user.name}</div>;
  }

  return (
    <div className={styles.userPlaceholderContainer}>
      <ActivityPlaceholder />
    </div>
  );
};

export default User;
