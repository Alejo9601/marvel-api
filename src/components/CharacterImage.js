import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;

  @media (max-width: 1366px) {
    margin: 25px 0px 25px 0px;
    padding: 25px 0px 25px 0px;
  }
`;
const CharName = styled.h1`
  font-size: 4rem;
  padding-bottom: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Img = styled.img`
  height: 650px;
  width: auto;
  object-fit: cover;
  box-shadow: -5px 5px 10px 0px black;

  @media (max-width: 1750px) {
    height: 550px;
  }

  @media (max-width: 1366px) {
    height: 800px;
  }

  @media (max-width: 1152px) {
    height: 650px;
  }

  @media (max-width: 832px) {
    height: 500px;
  }

  @media (max-width: 550px) {
    height: 350px;
  }
`;

const CharacterImage = ({ charData }) => {
  const imgSizes = ["/detail", "/portrait_uncanny", ""];
  const imageUrl = charData.data.results[0].thumbnail.path.replace(
    "http",
    "https"
  );
  const charName = charData.data.results[0].name;

  return (
    <ImgContainer>
      <CharName>{charName}</CharName>
      <Img
        src={charData ? `${imageUrl}${imgSizes[2]}.jpg` : ""}
        alt="character"
      />
    </ImgContainer>
  );
};

export default CharacterImage;
