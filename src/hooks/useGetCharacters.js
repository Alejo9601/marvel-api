import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl } from "../helpers/urlsGenerator";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [queryOffset, setQueryOffset] = useState(0);
  const LIMIT_PER_QUERY = 20;

  const updateQueryOffset = () => {
    setQueryOffset((prevOffset) => prevOffset + LIMIT_PER_QUERY);
  };

  const appendNewCharacters = (newChars) => {
    characters.length === 0
      ? setCharacters(newChars)
      : setCharacters((prevCharacters) => prevCharacters.concat(newChars));
  };

  const getCharacters = () => {
    helpHttp()
      .get(charactersUrl(LIMIT_PER_QUERY, queryOffset))
      .then((res) => {
        appendNewCharacters(res.data.results);
        updateQueryOffset();
      });
  };

  useEffect(() => {
    getCharacters();
    return () => {
      setCharacters([]);
      updateQueryOffset(0);
    };
  }, []);

  return { characters, getCharacters };
};

export default useGetCharacters;
