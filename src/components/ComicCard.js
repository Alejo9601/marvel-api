// import cerroCruz from "../assets/img/cerro.jpg";
// import RefButton from "./RefButton";
import styled from "styled-components";

const Card = styled.div`
  flex-direction: column;
  height: 250px;
  min-width: 150px;
  max-width: 150px;
  background-color: black;
  box-shadow: -2px 5px 10px -5px black;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
`;
const ImageContainer = styled.picture`
  height: 50%;
  width: 100%;
  overflow: hidden;
`;
const CardImage = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ComicCard = () => {
  return (
    <Card>
      <ImageContainer>
        {/* <source srcSet={cerroCruz} /> */}
        <CardImage alt="Noticia" />
      </ImageContainer>
    </Card>
  );
};

export default ComicCard;
