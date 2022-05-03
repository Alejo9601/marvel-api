import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { comicsUrlFor } from "../helpers/urlsGenerator";

const useGetComics = (charId) => {
  const [charComics, setCharComics] = useState({});
  const offset = useRef(0);

  const getComics = (next) => {
    const limit = 18;
    helpHttp()
      .get(comicsUrlFor(charId, limit))
      .then((res) => {
        setCharComics(res);
        next
          ? (offset.current = offset.current + limit)
          : (offset.current = offset.current - limit);
      });
  };

  useEffect(() => {
    getComics(true);
  }, [charId]);

  return Object.keys(charComics).length !== 0
    ? [charComics.data.results, charComics.data.total]
    : [[], 0];
};

export default useGetComics;
