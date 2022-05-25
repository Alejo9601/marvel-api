import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharacters = () => {
  const {
    consumeCharacters,
    resetData,
    loading,
    dataResults: characters,
    dataHeader: charsHeader,
  } = useMarvelApi();

  const getCharacters = () => {
    consumeCharacters();
  };

  useEffect(() => {
    getCharacters();
    return () => {
      resetData();
    };
  }, []);

  return { characters, charsHeader, getCharacters, loading };
};

export default useCharacters;
