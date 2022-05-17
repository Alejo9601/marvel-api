import styled from "styled-components";
import { useEffect, useRef } from "react";
import useSliderHandler from "../hooks/useSliderHandler";
import ListOfComics from "./ListOfComics";

const ButtonSlider = styled.div`
  display: inherit;
  align-items: center;
  color: var(--gray);
  font-size: 4rem;
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
`;
const SliderWrapper = styled.div`
  display: inherit;
  justify-content: flex-start;
  align-items: center;
  max-width: 624px;
  height: fit-content;
  overflow: hidden;
  border-radius: 15px;
  background-color: var(--light-gray);

  @media (max-width: 1366px) {
    max-width: 832px;
  }

  @media (max-width: 1152px) {
    width: 624px;
  }

  @media (max-width: 832px) {
    width: 416px;
  }

  @media (max-width: 550px) {
    max-width: 208px;
  }
`;
const Slider = styled.div`
  display: inherit;
  justify-content: space-around;
  transform-origin: left;
  transition: transform 1s ease;
  margin: 0;
  padding: 0;
  /* background-color: beige; */
`;
const Page = styled.p`
  font-size: 2rem;
  width: 100%;
  text-align: center;

  @media (max-width: 1366px) {
    margin-bottom: 65px;
  }
`;

const CarouselOfComics = ({ comics, getComics }) => {
  const sliderWrapper = useRef();
  const slider = useRef();
  const { handleSlide, cardsPerSlide, visibleCount } = useSliderHandler(
    sliderWrapper,
    slider
  );

  const handleClick = (nextBtn) => {
    if (visibleCount >= comics.length - cardsPerSlide()) {
      getComics();
    }
    handleSlide(nextBtn);
  };

  return (
    <>
      <ButtonSlider onClick={() => handleClick(false)}>{`<`}</ButtonSlider>
      <SliderWrapper ref={sliderWrapper}>
        <Slider ref={slider}>
          <ListOfComics comics={comics} />
        </Slider>
      </SliderWrapper>
      <ButtonSlider onClick={() => handleClick(true)}>{`>`}</ButtonSlider>
      <Page>
        {visibleCount} of {comics.length} retrieved
      </Page>
    </>
  );
};

export default CarouselOfComics;
