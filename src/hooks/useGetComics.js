import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import isEmptyObject from "../helpers/isEmpyObject";
import { comicsUrlFor } from "../helpers/urlsGenerator";

const useGetComics = (charId) => {
  const [charComics, setCharComics] = useState({});
  const limitPerQuery = 18;
  const queryOffset = useRef(limitPerQuery);

  const updateQueryOffset = () => {
    queryOffset.current = queryOffset.current + limitPerQuery;
  };

  const getComics = () => {
    helpHttp()
      .get(comicsUrlFor(charId, limitPerQuery))
      .then((res) => {
        setCharComics(
          !isEmptyObject(charComics) ? { ...charComics, ...res } : res
        );
        updateQueryOffset();
      });
  };

  useEffect(() => {
    getComics();
  }, [charId]);

  return Object.keys(charComics).length !== 0
    ? [charComics.data.results, charComics.data.total]
    : [[], 0];
};

export default useGetComics;
