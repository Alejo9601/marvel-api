import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* background-color: gray; */
`;
const CharName = styled.h1`
  font-size: 4rem;
  padding-bottom: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Img = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  box-shadow: -5px 5px 10px 0px black;
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
