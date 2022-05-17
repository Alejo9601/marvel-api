import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useObserver from "../hooks/useObserver";
import debounce from "just-debounce-it";
import Loader from "../components/Loader";
import useCharVariants from "../hooks/useCharVariants";
import { useParams } from "react-router-dom";

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

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charVariants, getCharVariants } = useCharVariants(
    charName !== undefined ? charName : ""
  );
  const toObserve = useRef();
  const [observer, setElements, entries] = useObserver({
    rootMargin: "500px", // half of item height
    root: null, // default, use viewport
  });

  const getNewVariants = useCallback(debounce(getCharVariants, 500), [entries]);

  useEffect(() => {
    const elements = [toObserve.current];
    setElements(elements);
  }, []);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getNewVariants();
      }
    });
  }, [entries]);

  return (
    <Characters>
      <ListOfCharacters characters={charVariants} />
      <TopBottomVisor ref={toObserve}>
        <Loader />
      </TopBottomVisor>
    </Characters>
  );
};

export default CharVariantsList;
