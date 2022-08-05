import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
