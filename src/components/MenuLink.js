import styled from "styled-components";

const StyledLi = styled.li`
  margin: 10px 25px 10px 25px;
  padding: 5px 10px 5px 10px;

  &:hover {
    border-radius: 5px;
    background-color: white;
  }

  a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;                                                                                                                                                                                                                                                                                                                                                                                                                 : ;

    &:hover {
      color: black;
    }
  }
`;

const MenuLink = ({ textValue, refTo }) => {
  return (
    <StyledLi>
      <a href={refTo} target="_blank">
        {textValue}
      </a>
    </StyledLi>
  );
};

export default MenuLink;
