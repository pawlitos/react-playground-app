import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Albums } from './modules/albums/pages';
import { AuthProvider } from './modules/auth/contexts';
import { Login } from './modules/auth/pages';
import { Home } from './modules/home/pages';
import { ProtectedRoute } from './modules/shared/components';
import { Layout } from './modules/shared/pages';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="albums"
              element={
                <ProtectedRoute>
                  <Albums />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
