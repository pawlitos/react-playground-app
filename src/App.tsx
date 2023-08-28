import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'common/components';
import { Layout } from 'common/layouts';
import { AuthProvider } from 'modules/auth';
import { AlbumDetails, AlbumsOutlet, AlbumsSummary } from 'pages/albums';
import { Login } from 'pages/auth';
import { Home } from 'pages/home';
import { AddUserPage, UsersOutlet, UsersPage } from 'pages/users';

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
            <Route path="albums" element={<AlbumsOutlet />}>
              <Route index element={<AlbumsSummary />} />
              <Route path=":albumId" element={<AlbumDetails />} />
            </Route>
            <Route path="users" element={<UsersOutlet />}>
              <Route index element={<UsersPage />} />
              <Route path="create" element={<AddUserPage />} />
            </Route>
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
