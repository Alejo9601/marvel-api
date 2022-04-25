import styled from "styled-components";

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  /* background-color: gray; */
  padding-right: 10px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  h1,
  p {
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: lighter;
    padding: 5px;
    margin: 10px;
  }

  h1 {
    font-size: 3rem;
    width: inherit;
    text-align: center;
  }

  p {
    font-size: 2rem;
    text-align: justify;
    line-height: 2.8rem;
  }

  @media (max-width: 550px) {
    margin-top: 0;
  }
`;

const CharacterHistory = ({ charData }) => {
  return (
    <DescContainer>
      <Description>
        <h1> Description </h1>
        <p>
          {charData
            ? charData.data.results[0].description
            : "No character description"}
        </p>
      </Description>
    </DescContainer>
  );
};

export default CharacterHistory;
