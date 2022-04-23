import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import sURL from "../assets/json/settingsUrl.json";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [heroData, setHeroData] = useState();

  useEffect(() => {
    const url = `${sURL.baseUrl}hulk${sURL.ts}${sURL.publicKey}${sURL.md5Hash}`;
    helpHttp()
      .get(url)
      .then((res) => setHeroData(res));
  }, []);

  const data = {
    heroData,
    setHeroData,
  };

  return <HeroContext.Provider value={data}>{children}</HeroContext.Provider>;
};

export { HeroProvider };
export default HeroContext;
