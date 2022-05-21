import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  a {
    display: inline-block;
    color: white;
    font-size: 1.8rem;
    text-align: center;
    text-decoration: none;
    padding: 10px 25px 10px 25px;
  }

  &:hover {
    border-radius: 5px;
    background-color: white;

    a {
      color: black;
    }
  }
`;

const MenuLink = ({ textValue, refTo, external }) => {
  return (
    <StyledLi>
      {external ? (
        <a href={refTo} target="_blank" rel="noreferrer">
          {textValue}
        </a>
      ) : (
        <Link to={refTo}>{textValue}</Link>
      )}
    </StyledLi>
  );
};

export default MenuLink;
