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
  margin-left: 0px;
  margin-right: 40px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterContent = () => {
  const { charData } = useContext(CharacterContext);

  return (
    <GridContainer>
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
    </GridContainer>
  );
};

export default CharacterContent;
