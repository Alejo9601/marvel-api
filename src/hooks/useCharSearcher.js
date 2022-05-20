import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharSearcher = (charName) => {
  const {
    consumeSearch,
    resetData,
    dataResults: charsSearched,
    dataHeader: charsSearchHeader,
  } = useMarvelApi();

  const searchChars = () => {
    consumeSearch(charName);
  };

  useEffect(() => {
    searchChars();
    return () => {
      resetData();
    };
  }, [charName]);

  return { charsSearched, charsSearchHeader, searchChars };
};

export default useCharSearcher;
