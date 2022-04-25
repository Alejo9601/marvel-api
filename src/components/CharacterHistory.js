import styled from "styled-components";

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const NoDescription = styled.h3`
  font-size: 2.5rem;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ff4040;
`;

const CharacterHistory = ({ charData }) => {
  const data = charData.data.results[0].description;

  return (
    <DescContainer>
      <Description>
        <h1> Description </h1>
        <p>
          {data !== "" ? (
            data
          ) : (
            <NoDescription>This character has no description</NoDescription>
          )}
        </p>
      </Description>
    </DescContainer>
  );
};

export default CharacterHistory;
