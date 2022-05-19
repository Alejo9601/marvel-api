import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharacters = () => {
  const {
    consumeCharacters,
    resetData,
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

  return { characters, getCharacters };
};

export default useCharacters;
