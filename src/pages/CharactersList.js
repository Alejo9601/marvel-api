import { useCallback } from "react";
import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharacters from "../hooks/useCharacters";
import debounce from "just-debounce-it";
import Visor from "../components/Visor";

const Characters = styled.section`
  min-height: 100vh;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
`;

const CharacterList = () => {
  const { characters, getCharacters } = useCharacters();

  const getNewCharacters = useCallback(debounce(getCharacters, 500), [
    characters,
  ]);

  return (
    <Characters>
      <ListOfCharacters characters={characters} />
      <Visor toDoWhenReached={getNewCharacters} />
    </Characters>
  );
};

export default CharacterList;
