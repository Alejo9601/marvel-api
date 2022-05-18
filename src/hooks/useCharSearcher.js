import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharSearcher = (charName) => {
  const SEARCH_LIMIT = 100;

  const {
    consumeSearch,
    resetData,
    dataResults: charsSearched,
    dataHeader: charsSearchHeader,
  } = useMarvelApi(SEARCH_LIMIT);

  const searchChars = () => {
    consumeSearch(charName);
  };

  useEffect(() => {
    searchChars();
    return () => {
      resetData();
    };
  }, [charName]);

  return { charsSearched };
};

export default useCharSearcher;
