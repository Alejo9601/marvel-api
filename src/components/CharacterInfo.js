import CharacterHistory from "./CharacterHistory";
import ComicSlider from "./ComicSlider";
import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styled from "styled-components";

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
`;

const CharacterInfo = () => {
  const { charData } = useContext(CharacterContext);

  return (
    <SectionContent>
      <CharacterHistory charData={charData}></CharacterHistory>
      <ComicSlider />
    </SectionContent>
  );
};

export default CharacterInfo;
