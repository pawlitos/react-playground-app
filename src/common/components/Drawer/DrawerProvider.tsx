import React, { useMemo, useState } from 'react';
import DrawerContext from './DrawerContext';

type Props = {
  children: React.ReactNode;
};

const DrawerProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  const value = useMemo(
    () => ({
      visible,
      open,
      close,
    }),
    [visible]
  );

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};

export default DrawerProvider;
