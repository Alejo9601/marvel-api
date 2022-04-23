import { useContext, useEffect } from "react";
import HeroContext from "../context/HeroContext";
import styled from "styled-components";
import Loader from "./Loader";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background-color: black; */
  height: 100%;
  background: url(../assets/img/background.jpg);
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* background-color: gray; */
`;
const Img = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  box-shadow: -5px 5px 10px 0px black;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  /* background-color: gray; */
  padding-right: 10px;
`;
const Description = styled.div`
  margin-top: 25px;
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
    line-height: 2.8rem;
  }
`;

const HeroContent = () => {
  const { heroData } = useContext(HeroContext);
  const imgSizes = ["/detail", "/portrait_uncanny", ""];

  useEffect(() => {
    if (heroData) console.log(heroData.data);
  }, [heroData]);

  return (
    <Section>
      {heroData ? (
        <>
          <ImgContainer>
            <Img
              src={
                heroData
                  ? `${heroData.data.results[0].thumbnail.path.replace(
                      "http",
                      "https"
                    )}${imgSizes[2]}.jpg`
                  : ""
              }
              alt="character"
            />
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
        </>
      ) : (
        <Loader></Loader>
      )}
    </Section>
  );
};

export default HeroContent;
