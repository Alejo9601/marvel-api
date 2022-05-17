import { useEffect } from "react";
import useMarvelApi from "./useMarvelApi";

const useCharVariants = (charName) => {
  const VARIANT_LIMIT = 100;

  const {
    consumeCharVariants,
    resetData,
    dataResults: charVariants,
    dataHeader: charVariantsHeader,
  } = useMarvelApi(VARIANT_LIMIT);

  const getCharVariants = () => {
    consumeCharVariants(charName);
  };

  useEffect(() => {
    getCharVariants();
    return () => {
      resetData();
    };
  }, [charName]);

  return { charVariants, getCharVariants };
};

export default useCharVariants;
