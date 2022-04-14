import styled from "styled-components";
import logo from "../assets/icon/logo.png";

const StyledPic = styled.picture`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: auto;
  }
`;

const Logo = () => {
  return (
    <StyledPic>
      <source srcSet={logo} />
      <img alt="logo" />
    </StyledPic>
  );
};

export default Logo;
