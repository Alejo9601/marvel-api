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

  h3 {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CharacterCard = ({ imgSrc, charName }) => {
  return (
    <Card to={`/character-detail/${charName}`}>
      <picture>
        <source srcSet={imgSrc} />
        <CardImage src={imgSrc} alt="comic" />
      </picture>
      <h3>{charName}</h3>
    </Card>
  );
};

export default CharacterCard;
