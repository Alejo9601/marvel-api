import { useEffect, useState } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharComics = () => {
  const {
    consumeComics,
    resetData,
    loading,
    dataResults: comics,
    dataHeader: comicsHeader,
  } = useMarvelApi();

  const [refId, setRefId] = useState(null);

  const getComics = () => {
    consumeComics(refId);
  };

  useEffect(() => {
    if (refId !== null) {
      getComics();
    }
    return () => {
      resetData();
    };
  }, [refId]);

  return comics.length !== 0
    ? [comics, comicsHeader.total, getComics, setRefId, loading]
    : [[], 0, getComics, setRefId, loading];
};

export default useCharComics;
