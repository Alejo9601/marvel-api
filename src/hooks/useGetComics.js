import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { comicsUrlFor } from "../helpers/urlsGenerator";
import sURL from "../assets/json/settingsUrl.json";

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
          ? (offset.current = offset.current + 18)
          : (offset.current = offset.current - 18);
      });
  };

  useEffect(() => {
    getComics(true);
  }, [charId]);

  return charComics;
};

export default useGetComics;
