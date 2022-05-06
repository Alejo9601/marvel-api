import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { comicsUrlFor } from "../helpers/urlsGenerator";

const useGetComics = () => {
  const comics = useRef([]);
  const [refId, setRefId] = useState(null);
  const [comicsHeader, setComicsHeader] = useState({});
  const limitPerQuery = 18;
  const queryOffset = useRef(0);

  const updateQueryOffset = () => {
    queryOffset.current = queryOffset.current + limitPerQuery;
  };

  const appendNewComics = (newComics) => {
    return comics.current.concat(newComics.data.results);
  };

  const getComics = () => {
    helpHttp()
      .get(comicsUrlFor(refId, limitPerQuery, queryOffset.current))
      .then((res) => {
        comics.current =
          comics.current.length !== 0 ? appendNewComics(res) : res.data.results;
        setComicsHeader({ total: res.data.total, count: res.data.count });
        updateQueryOffset();
      });
  };

  useEffect(() => {
    if (refId) {
      comics.current = [];
      getComics();
    }
  }, [refId]);

  return comics.length !== 0
    ? [comics.current, comicsHeader.total, getComics, setRefId]
    : [[], 0, getComics, setRefId];
};

export default useGetComics;
