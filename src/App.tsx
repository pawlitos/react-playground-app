import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './modules/auth/contexts';
import { Login } from './modules/auth/pages';
import { ProtectedRoute } from './modules/shared/components';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Tab1 } from './pages/Tab1';
import { Tab2 } from './pages/Tab2';
import { Tab3 } from './pages/Tab3';

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
              path="tab1"
              element={
                <ProtectedRoute>
                  <Tab1 />
                </ProtectedRoute>
              }
            />
            <Route
              path="tab2"
              element={
                <ProtectedRoute>
                  <Tab2 />
                </ProtectedRoute>
              }
            />
            <Route
              path="tab3"
              element={
                <ProtectedRoute>
                  <Tab3 />
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
