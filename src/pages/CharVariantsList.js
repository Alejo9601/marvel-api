import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharVariants from "../hooks/useCharVariants";
import { useParams } from "react-router-dom";

const Characters = styled.section`
  min-height: 100vh;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charVariants } = useCharVariants(
    charName !== undefined ? charName : ""
  );

  return (
    <Characters>
      <ListOfCharacters characters={charVariants} />
    </Characters>
  );
};

export default CharVariantsList;
