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
  position: relative;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charsSearched, charsSearchHeader, searchChars, loading } =
    useCharSearcher(charName !== undefined ? charName : "");

  return (
    <CharSearchSection>
      {charsSearched.length !== 0 ? (
        <Wrapper>
          <ListOfCharacters characters={charsSearched} />
        </Wrapper>
      ) : loading === false ? (
        <Message msg="THERE'S NOT A CHARACTER RELATED TO YOUR SEARCH" />
      ) : (
        <Loader />
      )}

      {charsSearched.length < charsSearchHeader.total ? (
        <Visor toDoWhenReached={searchChars} />
      ) : null}
    </CharSearchSection>
  );
};

export default CharVariantsList;
