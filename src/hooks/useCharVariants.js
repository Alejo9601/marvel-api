import { useEffect } from "react";
import { charVariantsUrl } from "../helpers/urlsGenerator";
import useMarvelApi from "./useMarvelApi";

const useCharVariants = (charName) => {
  const {
    consumeCharVariants,
    resetData,
    dataResults: charVariants,
    dataHeader: charVariantsHeader,
  } = useMarvelApi();

  const getCharVariants = () => {
    consumeCharVariants(charName);
  };

  useEffect(() => {
    getCharVariants();
    return () => {
      resetData();
    };
  }, []);

  return { charVariants, getCharVariants };
};

export default useCharVariants;
