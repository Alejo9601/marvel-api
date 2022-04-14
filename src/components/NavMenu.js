import MenuLink from "../components/MenuLink";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.nav`
  padding: 15px;
`;

const NavMenu = () => {
  return (
    <StyledNav>
      <StyledUl>
        <MenuLink textValue="About" />
        <MenuLink textValue="Creators Page" />
        <MenuLink textValue="Marvel Api" />
      </StyledUl>
    </StyledNav>
  );
};

export default NavMenu;
