import { UserType } from 'modules/users/types';
import styles from './UserList.module.css';
import { ActivityIndicator } from 'common/components';

type Props = {
  loading: boolean;
  users: UserType[];
};

const UserList = ({ loading, users }: Props) => {
  if (loading) {
    return (
      <p style={{ textAlign: 'center' }}>
        <ActivityIndicator />
      </p>
    );
  }

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.cellId}>ID</th>
          <th className={styles.cell}>Username</th>
          <th className={styles.cell}>Name</th>
          <th className={styles.cell}>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className={styles.cellId}>{user.id}</td>
            <td className={styles.cell}>{user.username}</td>
            <td className={styles.cell}>{user.name}</td>
            <td className={styles.cell}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
