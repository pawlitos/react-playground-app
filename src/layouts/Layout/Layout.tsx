import { Outlet } from 'react-router-dom';
import { Container, Header } from 'common';

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
