import styled from "styled-components";
import CharacterContext from "../context/CharacterContext";
import Loader from "./Loader";
import useCharComics from "../hooks/useCharComics";
import { useContext, useEffect } from "react";
import CarouselOfComics from "./CarouselOfComics";

const SectionSlider = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: fit-content;
  position: relative;
  /* background-color: beige; */
  align-self: start;
  margin-top: 10px;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;
`;
const SectionTitle = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3rem;
    padding: 5px;
    margin: 5px;

    @media (max-width: 1366px) {
      margin-top: 60px;
    }
  }
`;

const ComicSlider = () => {
  const { charData } = useContext(CharacterContext);
  const [comics, totalComics, getComics, setRefId] = useCharComics();

  useEffect(() => {
    setRefId(charData.data.results[0].id);
  }, [charData]);

  return (
    <SectionSlider>
      {comics.length !== 0 ? (
        <SectionWrapper>
          <SectionTitle>
            <h1>{totalComics} - Comics for this character</h1>
          </SectionTitle>
          <CarouselOfComics
            comics={comics}
            totalComics={totalComics}
            getComics={getComics}
          />
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </SectionSlider>
  );
};

export default ComicSlider;
