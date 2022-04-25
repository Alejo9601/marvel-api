import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styled from "styled-components";
import Loader from "./Loader";
import Message from "./Message";
import CharacterImage from "./CharacterImage";
import CharacterInfo from "./CharacterInfo";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background-color: black; */
  height: 100%;
  background: url(../assets/img/background.jpg);

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = () => {
  const { charData } = useContext(CharacterContext);

  return (
    <Section>
      {charData ? (
        <>
          {charData.data.results[0] ? (
            <>
              <CharacterImage charData={charData} />
              <CharacterInfo />
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
