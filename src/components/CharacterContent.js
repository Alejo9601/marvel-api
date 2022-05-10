import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styled from "styled-components";
import Loader from "./Loader";
import Message from "./Message";
import CharacterImage from "./CharacterImage";
import CharacterInfo from "./CharacterInfo";

const GridContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  flex-grow: 1;

  @media (max-width: 1366px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterContent = () => {
  const { charData } = useContext(CharacterContext);

  return (
    <GridContainer>
      {Object.keys(charData).length !== 0 ? (
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
    </GridContainer>
  );
};

export default CharacterContent;
