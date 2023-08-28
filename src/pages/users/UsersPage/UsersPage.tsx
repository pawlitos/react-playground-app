import { useEffect, useState } from 'react';
import { UserType } from 'modules/users/types';
import { getUsers } from 'services/api/users';
import { AlbumDetailsContainer } from 'modules/albums';
import { UserList } from 'modules/users';

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
      <h1>Users</h1>
      <AlbumDetailsContainer>
        <UserList loading={loading} users={users} />
      </AlbumDetailsContainer>
    </div>
  );
};

export default UsersPage;
