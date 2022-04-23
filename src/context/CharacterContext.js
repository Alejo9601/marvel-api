import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import sURL from "../assets/json/settingsUrl.json";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [charData, setCharData] = useState();

  useEffect(() => {
    const url = `${sURL.baseUrl}hulk${sURL.ts}${sURL.publicKey}${sURL.md5Hash}`;
    helpHttp()
      .get(url)
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
