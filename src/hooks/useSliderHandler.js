import { useEffect, useState, useRef } from "react";

const useSliderHandler = (sliderWrapper, slider) => {
  const [count, setCount] = useState(0);
  const sliderPosition = useRef();

  useEffect(() => {
    if (sliderWrapper.current && slider.current) setCount(cardsPerSlide());
  }, []);

  const resetSliderData = () => {
    slideToStart();
    setCount(cardsPerSlide());
  };

  const slideToStart = () => {
    slider.current.style.transform = `translate(0)`;
    sliderPosition.current = 0;
  };

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

  return { handleSlide, resetSliderData, cardsPerSlide, visibleCount: count };
};

export default useSliderHandler;
