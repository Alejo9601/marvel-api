import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styled from "styled-components";
import Loader from "./Loader";
import Message from "./Message";
import CharacterImage from "./CharacterImage";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* background-color: black; */
  height: 100%;
  background: url(../assets/img/background.jpg);
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
  const { heroData } = useContext(CharacterContext);

  return (
    <Section>
      {heroData ? (
        <>
          {heroData.data.results[0] ? (
            <>
              <CharacterImage heroData={heroData} />
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
            <Message msg="THERE'S NOT A CHARACTER RELATED TO YOUR SEARCH" />
          )}
        </>
      ) : (
        <Loader></Loader>
      )}
    </Section>
  );
};

export default HeroContent;
