import { Outlet } from 'react-router-dom';
import { Container, Drawer, Header } from 'common/components';
import { DrawerProvider } from 'common/components/Drawer';

const Layout = () => {
  return (
    <DrawerProvider>
      <Drawer />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </DrawerProvider>
  );
};

export default Layout;
