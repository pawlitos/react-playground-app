import { Outlet } from 'react-router-dom';
import { Container, Drawer, Header } from 'common/components';

const Layout = () => {
  return (
    <>
      <Drawer />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
