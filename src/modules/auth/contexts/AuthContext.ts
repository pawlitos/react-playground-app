import { createContext } from 'react';

type AuthContextType = {
  user: string | null;
  login: (data: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export default AuthContext;
