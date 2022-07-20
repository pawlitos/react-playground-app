import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Tab1 } from './pages/Tab1';
import { Tab2 } from './pages/Tab2';
import { Tab3 } from './pages/Tab3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
          <Route path="tab3" element={<Tab3 />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
