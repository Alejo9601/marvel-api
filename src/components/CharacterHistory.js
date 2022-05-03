import styled from "styled-components";

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: gray; */
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  h1,
  p {
    color: black;
    font-weight: lighter;
    padding: 5px;
    margin: 10px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-size: 2rem;
    text-align: justify;
    line-height: 2.8rem;
    width: 725px;
  }

  @media (max-width: 1366px) {
    margin-left: 0px;
    margin-right: 0px;

    p {
      width: 770px;
    }
  }

  @media (max-width: 1152px) {
    p {
      width: 620px;
    }
  }

  @media (max-width: 882px) {
    p {
      width: 480px;
    }
  }

  @media (max-width: 550px) {
    p {
      width: 350px;
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
`;

const NoDescription = styled.h3`
  font-size: 2rem;
  padding: 20px;
  background-color: #ff4040;
  text-align: center;
  border-radius: 10px;
`;

const CharacterHistory = ({ charData }) => {
  const data = charData.data.results[0].description;

  return (
    <DescContainer>
      <Description>
        <h1>Brief History</h1>
        <p>
          {data !== "" ? (
            data
          ) : (
            <NoDescription>
              SORRY ... Marvel has no history provided <br></br> for this
              character!
            </NoDescription>
          )}
        </p>
      </Description>
    </DescContainer>
  );
};

export default CharacterHistory;
