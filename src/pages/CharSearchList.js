import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharSearcher from "../hooks/useCharSearcher";
import { useParams } from "react-router-dom";

const CharSearchSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charsSearched } = useCharSearcher(
    charName !== undefined ? charName : ""
  );

  return (
    <CharSearchSection>
      <Wrapper>
        <ListOfCharacters characters={charsSearched} />
      </Wrapper>
    </CharSearchSection>
  );
};

export default CharVariantsList;
