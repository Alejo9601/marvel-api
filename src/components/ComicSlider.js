import { useRef, useEffect } from "react";
import ComicCard from "./ComicCard";
import TrimParagraph from "../helpers/TrimParagraph";
import styled from "styled-components";

const news = [
  {
    newsTitle: "News Title 1",
    newsParagraph:
      "Excepteur incididunt ullamco laborum enim occaecat quis tempor laborum excepteur Lorem excepteur anim eiusmod irure. Ex et laborum mollit reprehenderit eiusmod culpa. Et in sit et dolore Lorem aliqua cupidatat anim minim esse fugiat elit aliqua magna. Consectetur incididunt reprehenderit nisi laboris aute sunt enim cillum exercitation elit. Est velit fugiat aute exercitation quis aliquip velit cupidatat ut do nostrud sit nostrud duis.",
  },
  {
    newsTitle: "News Title 2",
    newsParagraph:
      "Aliqua laborum ex voluptate in reprehenderit culpa nostrud duis. Ut mollit duis ex cillum aliqua aliqua ullamco excepteur minim Lorem. Non qui sint sint magna deserunt ullamco elit proident proident ea. Duis officia id minim do do consectetur.",
  },
  {
    newsTitle: "News Title 3",
    newsParagraph:
      "Id mollit aute irure ad aute pariatur proident enim nulla. Et enim velit pariatur ut nostrud exercitation sit dolore ullamco voluptate sunt. Consequat sint aute enim dolore. Pariatur in ut excepteur eiusmod amet amet nulla aliquip irure anim Lorem enim consectetur magna. Consequat labore eu velit laboris dolor. Labore amet et officia pariatur. Cillum elit amet veniam velit sint cillum culpa et sint ut minim cillum.",
  },
  {
    newsTitle: "News Title 4",
    newsParagraph:
      "Irure pariatur cupidatat ipsum officia occaecat laboris duis nisi. Qui non pariatur ipsum nulla laborum ipsum. Commodo aute commodo aliquip reprehenderit occaecat.",
  },
  {
    newsTitle: "News Title 5",
    newsParagraph:
      "Sunt aliqua ex cupidatat culpa mollit tempor do ad in cillum ea duis. Ipsum aliqua ea duis magna aute reprehenderit ipsum eiusmod amet exercitation minim esse dolor. Nisi dolore mollit anim tempor eiusmod pariatur sint in amet ea ex eu est.",
  },
  {
    newsTitle: "News Title 6",
    newsParagraph:
      "Voluptate magna ex incididunt fugiat esse nostrud id veniam anim ut in magna magna. Cillum velit dolore veniam enim. Et nulla id deserunt mollit occaecat velit voluptate amet voluptate. Velit irure ullamco sint excepteur. Consequat consectetur et dolore magna consectetur est quis anim cillum sunt.",
  },
];

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
  max-width: 380px;
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

  useEffect(() => {
    currPosition.current = 0;
  }, []);

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
      <SectionTitle>
        <h1>Latest News</h1>
      </SectionTitle>
      <ButtonSlider onClick={() => handleSlide(false)}>{`<`}</ButtonSlider>
      <SliderWrapper>
        <Slider ref={slider}>
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
          <ComicCard />
        </Slider>
      </SliderWrapper>
      <ButtonSlider onClick={() => handleSlide(true)}>{`>`}</ButtonSlider>
    </SectionContent>
  );
};

export default ComicSlider;
