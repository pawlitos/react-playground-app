import { Outlet } from 'react-router-dom';
import { Container, Header } from 'common';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
