import { useContext, useEffect } from "react";
import HeroContext from "../context/HeroContext";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: black; */
`;
const ImgContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  margin: 20px;
  box-shadow: -5px 5px 10px 0px black;
`;
const Img = styled.img`
  max-height: 400px;
  width: auto;
  background-color: white;
  object-fit: cover;
`;
const DescContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 400px;
  background-color: beige;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  h1,
  p {
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: lighter;
    padding: 5px;
    margin: 10px;
  }

  h1 {
    font-size: 3rem;
    width: inherit;
    text-align: center;
  }

  p {
    font-size: 2rem;
    text-align: justify;
    line-height: 3rem;
  }
`;

const HeroContent = () => {
  const { heroData } = useContext(HeroContext);
  const imgSizes = ["detail", "portrait_uncanny"];

  useEffect(() => {
    if (heroData) console.log(heroData.data);
  }, [heroData]);

  return (
    <Section>
      <ImgContainer>
        <picture>
          <source
            srcSet={
              heroData
                ? `${heroData.data.results[0].thumbnail.path}/${imgSizes[0]}.jpg`
                : ""
            }
          />
          <Img alt="character" />
        </picture>
      </ImgContainer>
      <DescContainer>
        <Description>
          <h1> Description </h1>
          <p>
            {heroData
              ? heroData.data.results[0].description
              : "No character description"}
          </p>
        </Description>
      </DescContainer>
    </Section>
  );
};

export default HeroContent;
