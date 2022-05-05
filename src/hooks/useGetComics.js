import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { comicsUrlFor } from "../helpers/urlsGenerator";

const useGetComics = (refId) => {
  const [comics, setComics] = useState([]);
  const [comicsHeader, setComicsHeader] = useState({});
  const limitPerQuery = 18;
  const queryOffset = useRef(0);

  const updateQueryOffset = () => {
    queryOffset.current = queryOffset.current + limitPerQuery;
  };

  const appendNewComics = (newComics) => {
    return comics.concat(newComics.data.results);
  };

  const getComics = () => {
    helpHttp()
      .get(comicsUrlFor(refId, limitPerQuery, queryOffset.current))
      .then((res) => {
        setComics(
          comics.lenght !== 0 ? appendNewComics(res) : res.data.results
        );
        setComicsHeader({ total: res.data.total, count: res.data.count });
        updateQueryOffset();
      });
  };

  useEffect(() => {
    getComics();
  }, [refId]);

  return comics.length !== 0
    ? [comics, comicsHeader.total, getComics]
    : [[], 0];
};

export default useGetComics;
