import styled from "styled-components";

const Card = styled.div`
  flex-direction: column;
  height: 270px;
  min-width: 180px;
  max-width: 150px;
  box-shadow: -2px 5px 10px -5px black;
  margin: 20px;
  overflow: hidden;
`;
const ImageContainer = styled.picture`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ComicCard = ({ imgSrc }) => {
  return (
    <Card>
      <ImageContainer>
        <source srcSet={imgSrc} />
        <CardImage src={imgSrc} alt="comic" />
      </ImageContainer>
    </Card>
  );
};

export default ComicCard;
