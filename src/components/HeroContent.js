import { useContext } from "react";
import HeroContext from "../context/HeroContext";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;

const StyledImgContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 400px;
  background-color: bisque;
  margin: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const DescContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 400px;
  background-color: white;
`;

const StyledDescription = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
`;

const HeroContent = () => {
  const hero = useContext(HeroContext);
  // const imgUrl = hero.thumbnail.path + hero.extension;

  return (
    <StyledSection>
      <StyledImgContainer>
        <picture>
          {/* <source srcSet={hero.thumbnail} /> */}
          <StyledImg alt="character" />
        </picture>
      </StyledImgContainer>
      <DescContainer>
        <StyledDescription></StyledDescription>
      </DescContainer>
    </StyledSection>
  );
};

export default HeroContent;
