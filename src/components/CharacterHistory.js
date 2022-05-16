import { useEffect } from "react";
import styled from "styled-components";

const SectionDescription = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  /* background-color: gray; */
  align-self: center;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-right: 40px;

  h1,
  p {
    color: black;
    padding: 5px;
    margin: 5px 5px 5px 5px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-size: 2.2rem;
    text-align: justify;
    line-height: 2.8rem;
    width: 725px;
  }

  @media (max-width: 1366px) {
    margin-left: 0px;
    margin-right: 0px;

    p {
      width: 770px;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1152px) {
    p {
      width: 620px;
    }
  }

  @media (max-width: 832px) {
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
  padding: 22px 10px 22px 10px;
  margin: 22px 10px 22px 10px;
  background-color: #ff4040;
  text-align: center;
  border-radius: 10px;
  width: 700px;

  @media (max-width: 1366px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 770px;
  }

  @media (max-width: 1152px) {
    width: 620px;
  }

  @media (max-width: 832px) {
    width: 480px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }
`;
const Button = styled.a`
  background-color: #2155cd;
  font-size: 1.5rem;
  color: white;
  width: fit-content;
  text-decoration: none;
  align-self: center;
  padding: 5px;
  border-radius: 5px;
`;

const CharacterHistory = ({ charData }) => {
  const data = charData.data.results[0].description;
  const sourceUrl = charData.data.results[0].urls[0].url;

  return (
    <SectionDescription>
      <Description>
        <h1>Brief History</h1>
        {data !== "" ? (
          <p>{data}</p>
        ) : (
          <NoDescription>
            SORRY ... Unfortunately Marvel has no history provided <br></br> for
            this character!
          </NoDescription>
        )}
        <Button href={sourceUrl} target="_blank" rel="noreferrer">
          See on Marvel
        </Button>
      </Description>
    </SectionDescription>
  );
};

export default CharacterHistory;
