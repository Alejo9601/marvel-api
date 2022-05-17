import styled from "styled-components";
import { Link } from "react-router-dom";
import TrimText from "../helpers/TrimText";

const Card = styled(Link)`
  min-width: 250px;
  max-width: 250px;
  height: fit-content;
  flex-direction: column;
  box-shadow: -2px 5px 10px -5px black;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.8s ease;
  border-radius: 5px;
  text-decoration: none;
  color: black;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #2155cd;
    color: white;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 1.7rem;
    padding: 3px 0px;
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
      <h3>{TrimText(charName, 23)}</h3>
    </Card>
  );
};

export default CharacterCard;
