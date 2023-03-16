import { createContext } from 'react';

type DrawerContextType = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

const DrawerContext = createContext<DrawerContextType>({
  visible: false,
  open: () => {},
  close: () => {},
});

export default DrawerContext;
