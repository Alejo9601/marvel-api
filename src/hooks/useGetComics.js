import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { comicsUrlFor } from "../helpers/urlsGenerator";

const useGetComics = () => {
  const [comics, setComics] = useState([]);
  const [refId, setRefId] = useState(null);
  const [comicsHeader, setComicsHeader] = useState({});
  const [queryOffset, setQueryOffset] = useState(0);
  const LIMIT_PER_QUERY = 18;

  const updateQueryOffset = () => {
    setQueryOffset((prevOffset) => prevOffset + LIMIT_PER_QUERY);
  };

  const appendNewComics = (newComics) => {
    comics.length === 0
      ? setComics(newComics)
      : setComics((prevComics) => prevComics.concat(newComics));
  };

  const getComics = () => {
    helpHttp()
      .get(comicsUrlFor(refId, LIMIT_PER_QUERY, queryOffset))
      .then((res) => {
        appendNewComics(res.data.results);
        setComicsHeader({ total: res.data.total, count: res.data.count });
        updateQueryOffset();
      });
  };

  useEffect(() => {
    if (refId) {
      setComics([]);
      setQueryOffset(0);
      getComics();
    }
    return () => {
      setComics([]);
    };
  }, [refId]);

  return comics.length !== 0
    ? [comics, comicsHeader.total, getComics, setRefId]
    : [[], 0, getComics, setRefId];
};

export default useGetComics;
