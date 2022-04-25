import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* background-color: gray; */
`;
const Img = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  box-shadow: -5px 5px 10px 0px black;
`;
const CharacterImage = ({ heroData }) => {
  const imgSizes = ["/detail", "/portrait_uncanny", ""];

  return (
    <ImgContainer>
      <Img
        src={
          heroData
            ? `${heroData.data.results[0].thumbnail.path.replace(
                "http",
                "https"
              )}${imgSizes[2]}.jpg`
            : ""
        }
        alt="character"
      />
    </ImgContainer>
  );
};

export default CharacterImage;
