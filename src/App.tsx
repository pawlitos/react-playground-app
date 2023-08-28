import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'common/components';
import { Layout } from 'common/layouts';
import { AuthProvider } from 'modules/auth';
import { AlbumDetails, Albums, AlbumsPage } from 'pages/albums';
import { Login } from 'pages/auth';
import { Home } from 'pages/home';
import { UsersPage } from 'pages/users';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="albums" element={<Albums />}>
              <Route index element={<AlbumsPage />} />
              <Route path=":albumId" element={<AlbumDetails />} />
            </Route>
            <Route path="users" element={<UsersPage />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem', textAlign: 'center' }}>
                <h1>404 Page Not Found</h1>
              </main>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
