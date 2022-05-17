import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { charactersUrl } from "../helpers/urlsGenerator";
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
