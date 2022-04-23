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
        <MenuLink textValue="About" refTo="" />
        <MenuLink
          textValue="Creator's WEB"
          refTo="https://juarezdev.vercel.app"
        />
        <MenuLink textValue="Marvel API" refTo="https://developer.marvel.com" />
      </StyledUl>
    </StyledNav>
  );
};

export default NavMenu;
