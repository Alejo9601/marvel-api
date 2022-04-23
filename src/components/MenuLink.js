import styled from "styled-components";

const StyledLi = styled.li`
  margin: 10px;

  &:hover {
    border-radius: 5px;
    background-color: white;
  }

  a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    &:hover {
      color: black;
    }
  }
`;

const MenuLink = ({ textValue, refTo }) => {
  return (
    <StyledLi>
      <a href={refTo}>{textValue}</a>
    </StyledLi>
  );
};

export default MenuLink;
