import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharSearcher = (charName) => {
  const {
    consumeSearch,
    resetData,
    loading,
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

  return { charsSearched, charsSearchHeader, searchChars, loading };
};

export default useCharSearcher;
