import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharacters from "../hooks/useCharacters";
import useObserver from "../hooks/useObserver";
import debounce from "just-debounce-it";
import Loader from "../components/Loader";

const Characters = styled.section`
  min-height: 100vh;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: lightblue;
  color: white;
  width: 100%;
  height: fit-content;
  text-align: center;
  font-size: 2rem;
  margin-top: 20px;
`;
const TopBottomVisor = styled.div`
  width: 100%;
  text-align: center;
  background-color: blue;
  position: absolute;
`;

const CharacterList = () => {
  const { characters, getCharacters } = useCharacters();
  const toObserve = useRef();
  const [observer, setElements, entries] = useObserver({
    rootMargin: "500px", // half of item height
    root: null, // default, use viewport
  });

  const getNewCharacters = useCallback(debounce(getCharacters, 500), [entries]);

  useEffect(() => {
    const elements = [toObserve.current];
    setElements(elements);
  }, []);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getNewCharacters();
      }
    });
  }, [entries]);

  return (
    <Characters>
      <ListOfCharacters characters={characters} />
      <TopBottomVisor ref={toObserve}>
        <Loader />
      </TopBottomVisor>
    </Characters>
  );
};

export default CharacterList;
