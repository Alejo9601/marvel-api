import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl } from "../helpers/urlsGenerator";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const limitPerQuery = 20;
  const queryOffset = useRef(0);

  const updateQueryOffset = () => {
    queryOffset.current = queryOffset.current + limitPerQuery;
  };

  const appendNewCharacters = (newCharacters) => {
    return characters.concat(newCharacters.data.results);
  };

  const getCharacters = () => {
    helpHttp()
      .get(charactersUrl(limitPerQuery, queryOffset.current))
      .then((res) => {
        setCharacters(
          characters.length !== 0 ? appendNewCharacters(res) : res.data.results
        );
        updateQueryOffset();
      });
  };

  return characters.length !== 0
    ? [characters, getCharacters]
    : [[], getCharacters];
};

export default useGetCharacters;
