import { useRef, useEffect, useContext, useState } from "react";
import ComicCard from "./ComicCard";
import styled from "styled-components";
import CharacterContext from "../context/CharacterContext";
import sURL from "../assets/json/settingsUrl.json";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";

const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
`;
const SectionTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
`;
const ButtonSlider = styled.div`
  height: 100%;
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
  max-width: 570px;
  overflow: hidden;
  border-radius: 15px;
  background-color: var(--light-gray);
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
    const cards = 6;
    const cardWidth = 150;
    const cardsDisplayed = 2;
    const sliderStep = cardWidth * cardsDisplayed; //step of 1020 or 680

    const sliderLimit = next ? -sliderStep * (cards / cardsDisplayed - 1) : 0;

    if (currPosition.current !== sliderLimit) {
      next ? slideNext(sliderStep) : slidePrev(sliderStep);
    }
  };

  return (
    <SectionContent>
      {Object.keys(charComics).length !== 0 ? (
        <>
          <SectionTitle>
            <h1>Latest News</h1>
          </SectionTitle>
          <ButtonSlider onClick={() => handleSlide(false)}>{`<`}</ButtonSlider>
          <SliderWrapper>
            <Slider ref={slider}>
              <ComicCard
                imgSrc={`${charComics.data.results[0].thumbnail.path}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[1].thumbnail.path}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[2].thumbnail.path}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[3].thumbnail.path}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[4].thumbnail.path}.jpg`}
              />
              <ComicCard
                imgSrc={`${charComics.data.results[5].thumbnail.path}.jpg`}
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
