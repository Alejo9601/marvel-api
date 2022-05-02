import styled from "styled-components";

const StyledLi = styled.li`
  margin: 10px 25px 10px 25px;
  padding: 5px 10px 5px 10px;

  a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
  }

  &:hover {
    border-radius: 5px;
    background-color: white;

    a {
      color: black;
    }
  }
`;

const MenuLink = ({ textValue, refTo }) => {
  return (
    <StyledLi>
      <a href={refTo} target="_blank" rel="noreferrer">
        {textValue}
      </a>
    </StyledLi>
  );
};

export default MenuLink;
