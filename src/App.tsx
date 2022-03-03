import React from 'react';
import logo from "./logo.svg";
import { Header, Logo } from "./components";

const App = () => {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
    </Header>
  );
};

export default App;
