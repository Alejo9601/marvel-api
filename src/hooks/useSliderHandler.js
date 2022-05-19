import { useEffect, useState, useRef } from "react";

const useSliderHandler = (sliderWrapper, slider) => {
  const [count, setCount] = useState(0);
  const sliderPosition = useRef(0);

  useEffect(() => {
    if (sliderWrapper.current && slider.current) setCount(cardsPerSlide());
    // return () => {
    //   console.log("Me desmonte");
    //   slideToStart();
    // };
  }, []);

  // const resetSliderData = () => {
  //   slideToStart();
  //   setCount(cardsPerSlide());
  // };

  // const slideToStart = () => {
  //   slider.current.style.transform = `translate(0)`;
  //   sliderPosition.current = 0;
  // };

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

  const cardsPerSlide = () => {
    const cardWidth = 208;
    return wrapperWidth() / cardWidth;
  };

  const handleSlide = (next) => {
    if (next) {
      slide(wrapperWidth(), true);
      setCount(count + cardsPerSlide());
    } else if (sliderPosition.current < 0) {
      slide(wrapperWidth(), false);
      setCount(count - cardsPerSlide());
    }
  };

  return { handleSlide, cardsPerSlide, count };
};

export default useSliderHandler;
