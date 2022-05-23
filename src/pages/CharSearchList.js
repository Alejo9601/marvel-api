import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharSearcher from "../hooks/useCharSearcher";
import { useParams } from "react-router-dom";
import Visor from "../components/Visor";
import Message from "../components/Message";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const CharSearchSection = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  justify-content: flex-start;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charsSearched, charsSearchHeader, searchChars } = useCharSearcher(
    charName !== undefined ? charName : ""
  );
  const [displayMsg, setDisplayMsg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      charsSearched.length === 0 ? setDisplayMsg(true) : setDisplayMsg(false);
    }, 3000);
  }, [charsSearched]);

  return (
    <CharSearchSection>
      <Wrapper>
        {charsSearched.length !== 0 ? (
          <ListOfCharacters characters={charsSearched} />
        ) : displayMsg ? (
          <Message msg="THERE'S NOT A CHARACTER RELATED TO YOUR SEARCH" />
        ) : (
          <Loader />
        )}
      </Wrapper>
      {charsSearched.length < charsSearchHeader.total ? (
        <Visor toDoWhenReached={searchChars} />
      ) : null}
    </CharSearchSection>
  );
};

export default CharVariantsList;
