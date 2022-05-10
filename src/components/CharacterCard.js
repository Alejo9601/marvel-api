import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  min-width: 250px;
  max-width: 250px;
  height: fit-content;
  flex-direction: column;
  box-shadow: -2px 5px 10px -5px black;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.8s ease;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  /* background-color: black; */
  /* 
  @media (max-width: 550px) {
    min-width: ;
  } */

  h3 {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
`;
const ImageContainer = styled.picture`
  min-height: 250px;
  overflow: hidden;
`;
const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CharacterCard = ({ imgSrc, charName, handleClick }) => {
  return (
    <Card to="/character-detail">
      <ImageContainer>
        <source srcSet={imgSrc} />
        <CardImage src={imgSrc} alt="comic" />
      </ImageContainer>
      <h3>{charName}</h3>
    </Card>
  );
};

export default CharacterCard;
