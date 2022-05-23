import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharacters from "../hooks/useCharacters";
import debounce from "just-debounce-it";
import Visor from "../components/Visor";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Characters = styled.section`
  flex: 1;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
`;

const CharacterList = () => {
  const { characters, charsHeader, getCharacters } = useCharacters();

  const getNewCharacters = useCallback(debounce(getCharacters, 500), [
    characters,
  ]);

  const [displayMsg, setDisplayMsg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      characters.length === 0 ? setDisplayMsg(true) : setDisplayMsg(false);
    }, 3000);
  }, [characters]);

  return (
    <Characters>
      {characters.length !== 0 ? (
        <ListOfCharacters characters={characters} />
      ) : displayMsg ? (
        <Message msg="AN ERROR OCURRED... PLEASE CHECK YOUR INTERNET CONNECTION" />
      ) : (
        <Loader />
      )}
      {characters.length < charsHeader.total ? (
        <Visor toDoWhenReached={getNewCharacters} />
      ) : null}
    </Characters>
  );
};

export default CharacterList;
