import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  background-color: #ed1d24;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0px 1px 10px 0px black;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavMenu />
      <SearchBar />
    </StyledHeader>
  );
};

export default Header;
