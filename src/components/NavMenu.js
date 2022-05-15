import MenuLink from "../components/MenuLink";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.nav`
  padding: 8px;
`;

const NavMenu = () => {
  return (
    <StyledNav>
      <StyledUl>
        <MenuLink textValue="Characters" refTo="/marvel-characters" />
        <MenuLink
          textValue="Creator's WEB"
          refTo="https://juarezdev.vercel.app"
          external={true}
        />
        <MenuLink
          textValue="Marvel API"
          refTo="https://developer.marvel.com"
          external={true}
        />
      </StyledUl>
    </StyledNav>
  );
};

export default NavMenu;
