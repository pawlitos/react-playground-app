import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from 'common';
import AuthContext from './AuthContext';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useSessionStorage('user', null);
  const navigate = useNavigate();

  const login = async (data: string) => {
    setUser(data);
    navigate('/', { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
