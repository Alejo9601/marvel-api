import styled from "styled-components";
import CharacterContext from "../context/CharacterContext";
import Loader from "./Loader";
import useGetComics from "../hooks/useGetComics";
import { useContext, useState } from "react";
import Carousel from "./Carousel";

const SectionSlider = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: fit-content;
`;
const SectionTitle = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3rem;
    padding: 5px;
    margin: 10px;

    @media (max-width: 1366px) {
      margin-top: 60px;
    }
  }
`;

const ComicSlider = () => {
  const { charData } = useContext(CharacterContext);
  const [comics, totalComics] = useGetComics(charData.data.results[0].id);

  return (
    <SectionSlider>
      {comics.length !== 0 ? (
        <SectionWrapper>
          <SectionTitle>
            <h1>{totalComics} - Comics for this character</h1>
          </SectionTitle>
          <Carousel comics={comics}></Carousel>
        </SectionWrapper>
      ) : (
        <Loader></Loader>
      )}
    </SectionSlider>
  );
};

export default ComicSlider;
