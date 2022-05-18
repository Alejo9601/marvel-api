import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharVariants from "../hooks/useCharVariants";
import { useParams } from "react-router-dom";

const CharVariantsSection = styled.section`
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
  const { charVariants } = useCharVariants(
    charName !== undefined ? charName : ""
  );

  return (
    <CharVariantsSection>
      <Wrapper>
        <ListOfCharacters characters={charVariants} />
      </Wrapper>
    </CharVariantsSection>
  );
};

export default CharVariantsList;
