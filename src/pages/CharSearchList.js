import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharSearcher from "../hooks/useCharSearcher";
import { useParams } from "react-router-dom";
import Visor from "../components/Visor";

const CharSearchSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charsSearched, charsSearchHeader, searchChars } = useCharSearcher(
    charName !== undefined ? charName : ""
  );

  return (
    <CharSearchSection>
      <Wrapper>
        <ListOfCharacters characters={charsSearched} />
      </Wrapper>
      <Visor toDoWhenReached={searchChars} />
    </CharSearchSection>
  );
};

export default CharVariantsList;
