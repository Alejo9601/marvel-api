import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl } from "../helpers/urlsGenerator";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [queryOffset, setQueryOffset] = useState(0);
  const LIMIT_PER_QUERY = 20;

  const updateQueryOffset = () => {
    setQueryOffset((prevOffset) => prevOffset + LIMIT_PER_QUERY);
  };

  const appendNewCharacters = (newCharacters) => {
    const newChars = newCharacters.data.results;
    characters.length === 0
      ? setCharacters(newChars)
      : setCharacters((prevCharacters) => prevCharacters.concat(newChars));
  };

  const getCharacters = () => {
    helpHttp()
      .get(charactersUrl(LIMIT_PER_QUERY, queryOffset))
      .then((res) => {
        appendNewCharacters(res);
        updateQueryOffset();
      });
  };

  useEffect(() => {
    getCharacters();
    return () => {
      setCharacters([]);
    };
  }, []);

  return { characters, getCharacters };
};

export default useGetCharacters;
