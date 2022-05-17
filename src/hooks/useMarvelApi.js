import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl, comicsUrlFor } from "../helpers/urlsGenerator";

const useMarvelApi = () => {
  const [dataResults, setDataResults] = useState([]);
  const [dataHeader, setDataHeader] = useState({});
  const [queryOffset, setQueryOffset] = useState(0);
  const LIMIT_PER_QUERY = 18;

  const updateQueryOffset = () => {
    setQueryOffset((prevOffset) => prevOffset + LIMIT_PER_QUERY);
  };

  const appendNewResults = (newResults) => {
    dataResults.length === 0
      ? setDataResults(newResults)
      : setDataResults((prevResults) => prevResults.concat(newResults));
  };

  const resetData = () => {
    setDataHeader({});
    setDataResults([]);
    setQueryOffset(0);
  };

  const consumeApi = (url) => {
    console.log(url);
    helpHttp()
      .get(url)
      .then((res) => {
        appendNewResults(res.data.results);
        setDataHeader({ total: res.data.total, count: res.data.count });
        updateQueryOffset();
      });
  };

  const consumeComics = (charId) => {
    const url = comicsUrlFor(charId, LIMIT_PER_QUERY, queryOffset);
    consumeApi(url);
  };

  const consumeCharacters = () => {
    const url = charactersUrl(LIMIT_PER_QUERY, queryOffset);
    consumeApi(url);
  };

  return {
    consumeComics,
    consumeCharacters,
    resetData,
    dataResults,
    dataHeader,
  };
};

export default useMarvelApi;
