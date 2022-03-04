import styled, { keyframes } from "styled-components";
import logo from "../logo.svg";

const HeaderContainer = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeaderTitle = styled.span`
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 1em;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>React Playground</HeaderTitle>
      <Logo src={logo} alt="logo" />
    </HeaderContainer>
  );
};

export default Header;