import { Context, createContext } from "react";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [hero, setHero] = useState();

  return <HeroContext.Provider>{children}</HeroContext.Provider>;
};

export { HeroProvider };
export default HeroContext;
