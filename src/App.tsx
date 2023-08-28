import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'common/components';
import { Layout } from 'common/layouts';
import { AuthProvider } from 'modules/auth';
import { AlbumPage, AlbumsPage } from 'pages/albums';
import { Login } from 'pages/auth';
import { Home } from 'pages/home';
import UsersPage from 'pages/users/UsersPage/UsersPage';

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
                  <AlbumsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="albums/:albumId"
              element={
                <ProtectedRoute>
                  <AlbumPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
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
