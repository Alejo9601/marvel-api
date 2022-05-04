import styled from "styled-components";
import ComicCard from "./ComicCard";
import { useEffect, useRef, useState } from "react";

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

const Carousel = ({ comics }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const sliderPosition = useRef(0);
  const sliderWrapper = useRef();
  const slider = useRef();
  const imgSize = "portrait_fantastic";

  useEffect(() => {
    setVisibleCount(cardsDisplayed());
  }, []);

  const slide = (step, next) => {
    slider.current.style.transform = `translate(${
      next ? sliderPosition.current - step : sliderPosition.current + step
    }px)`;
    sliderPosition.current = next
      ? sliderPosition.current - step
      : sliderPosition.current + step;
  };

  const wrapperWidth = () => {
    return sliderWrapper.current.clientWidth;
  };

  const cardsDisplayed = () => {
    const cardWidth = 208;
    return wrapperWidth() / cardWidth;
  };

  const handleSlide = (next) => {
    if (next) {
      slide(wrapperWidth(), true);
      setVisibleCount(visibleCount + cardsDisplayed());
    } else if (sliderPosition.current < 0) {
      slide(wrapperWidth(), false);
      setVisibleCount(visibleCount - cardsDisplayed());
    }
  };

  return (
    <>
      <ButtonSlider onClick={() => handleSlide(false)}>{`<`}</ButtonSlider>
      <SliderWrapper ref={sliderWrapper}>
        <Slider ref={slider}>
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              imgSrc={`${comic.thumbnail.path}/${imgSize}.jpg`.replace(
                "http",
                "https"
              )}
            />
          ))}
        </Slider>
      </SliderWrapper>
      <ButtonSlider onClick={() => handleSlide(true)}>{`>`}</ButtonSlider>
      <Page>
        {visibleCount} of {comics.length} retrieved
      </Page>
    </>
  );
};

export default Carousel;
