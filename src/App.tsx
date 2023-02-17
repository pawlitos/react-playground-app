import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AlbumPage, AlbumsPage } from 'modules/albums';
import { AuthProvider, Login } from 'modules/auth';
import { Home } from 'modules/home';
import { Layout, ProtectedRoute } from 'modules/shared';

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
