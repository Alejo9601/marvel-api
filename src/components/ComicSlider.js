import ComicCard from "./ComicCard";
import styled from "styled-components";
import CharacterContext from "../context/CharacterContext";
import Loader from "./Loader";
import useGetComics from "../hooks/useGetComics";
import { useContext, useRef, useState } from "react";

const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  position: relative;
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
      margin-top: 80px;
    }
  }
`;
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
    max-width: 416px;
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
    margin-bottom: 100px;
  }
`;

const ComicSlider = () => {
  const { charData } = useContext(CharacterContext);
  const [comics, totalComics] = useGetComics(charData.data.results[0].id);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderWrapper = useRef();
  const slider = useRef();
  const sliderPosition = useRef(0);
  const imgSize = "portrait_fantastic";

  const slide = (step, next) => {
    slider.current.style.transform = `translate(${
      next ? sliderPosition.current - step : sliderPosition.current + step
    }px)`;
    sliderPosition.current = next
      ? sliderPosition.current - step
      : sliderPosition.current + step;
  };

  const handleSlide = (next) => {
    const wrapperWidth = sliderWrapper.current.clientWidth;
    /*Implement here getting comics when reaching sliding*/
    if (next) {
      slide(wrapperWidth, true);
      setVisibleCount(visibleCount + 3);
    } else if (sliderPosition.current < 0) {
      slide(wrapperWidth, false);
      setVisibleCount(visibleCount - 3);
    }
  };

  return (
    <SectionContent>
      {comics.length !== 0 ? (
        <>
          <SectionTitle>
            <h1>Comics for this character * {totalComics} * </h1>
          </SectionTitle>
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
          <Page>{visibleCount} of first 20</Page>
        </>
      ) : (
        <Loader></Loader>
      )}
    </SectionContent>
  );
};

export default ComicSlider;
