import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'common/components';
import { DrawerProvider } from 'common/components/Drawer';
import { Layout } from 'common/layouts';
import { AlbumPage, AlbumsPage } from 'modules/albums';
import { AuthProvider, Login } from 'modules/auth';
import { Home } from 'modules/home';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DrawerProvider>
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
        </DrawerProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
