import { useContext, useEffect } from "react";
import CharacterContext from "../context/CharacterContext";
import styled from "styled-components";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CharacterImage from "../components/CharacterImage";
import CharacterHistory from "../components/CharacterHistory";
import ComicSlider from "../components/ComicSlider";
import { useParams } from "react-router-dom";

const GridContainer = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1.2fr;

  @media (max-width: 1366px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterDetail = () => {
  const { charName } = useParams();
  const { charData, setCharName } = useContext(CharacterContext);

  useEffect(() => {
    setCharName(charName);
    return () => {
      setCharName("");
    };
  }, [charName]);

  return (
    <GridContainer>
      {Object.keys(charData).length !== 0 ? (
        <>
          {charData.data.results[0] ? (
            <>
              <CharacterImage charData={charData} />
              <CharacterHistory charData={charData} />
              <ComicSlider />
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

export default CharacterDetail;
