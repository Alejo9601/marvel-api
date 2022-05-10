import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl } from "../helpers/urlsGenerator";

const useGetCharacters = () => {
  const characters = useRef([]);
  const [charactersHeader, setCharactersHeader] = useState({});
  const limitPerQuery = 20;
  const queryOffset = useRef(0);

  const updateQueryOffset = () => {
    queryOffset.current = queryOffset.current + limitPerQuery;
  };

  const appendNewCharacters = (newCharacters) => {
    return characters.current.concat(newCharacters.data.results);
  };

  const getCharacters = () => {
    helpHttp()
      .get(charactersUrl(limitPerQuery, queryOffset.current))
      .then((res) => {
        characters.current =
          characters.current.length !== 0
            ? appendNewCharacters(res)
            : res.data.results;
        setCharactersHeader({ total: res.data.total, count: res.data.count });
        updateQueryOffset();
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return characters.length !== 0
    ? [characters.current, charactersHeader.total, getCharacters]
    : [[], 0, getCharacters];
};

export default useGetCharacters;
