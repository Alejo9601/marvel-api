import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useCharVariants from "../hooks/useCharVariants";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Characters = styled.section`
  min-height: 100vh;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`;

const CharVariantsList = () => {
  const { charName } = useParams();
  const { charVariants, getCharVariants } = useCharVariants(
    charName !== undefined ? charName : ""
  );

  useEffect(() => {
    getCharVariants();
  }, []);

  return (
    <Characters>
      <ListOfCharacters characters={charVariants} />
    </Characters>
  );
};

export default CharVariantsList;
