import { useContext } from 'react';
import DrawerContext from './DrawerContext';

const useDrawer = () => {
  return useContext(DrawerContext);
};

export default useDrawer;
