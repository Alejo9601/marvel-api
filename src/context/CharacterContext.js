import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { characterUrlFor } from "../helpers/urlsGenerator";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [charData, setCharData] = useState();

  useEffect(() => {
    helpHttp()
      .get(characterUrlFor("hulk"))
      .then((res) => setCharData(res));
  }, []);

  const data = {
    charData,
    setCharData,
  };

  return <HeroContext.Provider value={data}>{children}</HeroContext.Provider>;
};

export { HeroProvider };
export default HeroContext;
