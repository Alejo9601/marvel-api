import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { characterUrlFor } from "../helpers/urlsGenerator";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [charData, setCharData] = useState({});
  const [charName, setCharName] = useState("");

  useEffect(() => {
    if (charName !== "") {
      helpHttp()
        .get(characterUrlFor(charName))
        .then((res) => setCharData(res));
    } else {
      setCharData({});
    }
  }, [charName]);

  const data = {
    charData,
    setCharName,
  };

  return <HeroContext.Provider value={data}>{children}</HeroContext.Provider>;
};

export { HeroProvider };
export default HeroContext;
