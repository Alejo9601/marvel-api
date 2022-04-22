import { Context, createContext, uses } from "react";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  return <HeroContext.Provider>{children}</HeroContext.Provider>;
};

export { HeroProvider };
export default HeroContext;
