import { useRef, useEffect, useContext, useState } from "react";
import ComicCard from "./ComicCard";
import styled from "styled-components";
import CharacterContext from "../context/CharacterContext";
import sURL from "../assets/json/settingsUrl.json";
import { helpHttp } from "../helpers/helpHttp";

const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
`;
const SectionTitle = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    padding: 5px;
    margin: 10px;
  }
`;
const ButtonSlider = styled.div`
  display: inherit;
  align-items: center;
  color: var(--gray);
  font-size: 6rem;
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const SliderWrapper = styled.div`
  display: inherit;
  justify-content: flex-start;
  align-items: center;
  max-width: 625px;
  height: fit-content;
  overflow: hidden;
  border-radius: 15px;
  background-color: var(--light-gray);
  padding: 5px;
  margin: 10px;
`;
const Slider = styled.div`
  display: inherit;
  justify-content: space-around;
  transform-origin: left;
  transition: transform 1s ease;
  margin: 0;
  padding: 0;
  background-color: white;
`;

const ComicSlider = () => {
  const slider = useRef();
  const currPosition = useRef();
  const comicsCount = useRef();
  const imgSize = "portrait_fantastic";
  const { charData } = useContext(CharacterContext);
  const [charComics, setCharComics] = useState({});

  useEffect(() => {
    currPosition.current = 0;
  }, []);

  useEffect(() => {
    getComics();
  }, [charData]);

  const getComics = () => {
    const charId = charData.data.results[0].id;
    const url = `${sURL.baseUrl}/${charId}/comics?${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
    helpHttp()
      .get(url)
      .then((res) => {
        setCharComics(res);
        comicsCount.current = charComics.data.count;
      });
  };

  const slideNext = (step) => {
    slider.current.style.transform = `translate(${
      currPosition.current - step
    }px)`;
    currPosition.current = currPosition.current - step;
  };

  const slidePrev = (step) => {
    slider.current.style.transform = `translate(${
      currPosition.current + step
    }px)`;
    currPosition.current = currPosition.current + step;
  };

  const handleSlide = (next) => {
    const wrapperWidth = 625;
    const lowerLimit = 0;
    if (currPosition.current !== lowerLimit) {
      next ? slideNext(wrapperWidth) : slidePrev(wrapperWidth);
    }
  };

  return (
    <SectionContent>
      {Object.keys(charComics).length !== 0 ? (
        <>
          <SectionTitle>
            <h1>Comics ...</h1>
          </SectionTitle>
          <ButtonSlider onClick={() => handleSlide(false)}>{`<`}</ButtonSlider>
          <SliderWrapper>
            <Slider ref={slider}>
              <ComicCard
                imgSrc={`${charComics.data.results[0].thumbnail.path}/${imgSize}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[1].thumbnail.path}/${imgSize}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[2].thumbnail.path}/${imgSize}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[3].thumbnail.path}/${imgSize}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[4].thumbnail.path}/${imgSize}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[5].thumbnail.path}/${imgSize}.jpg`}
              />
            </Slider>
          </SliderWrapper>
          <ButtonSlider onClick={() => handleSlide(true)}>{`>`}</ButtonSlider>
        </>
      ) : (
        "...cargando comics"
      )}
    </SectionContent>
  );
};

export default ComicSlider;
