import { useEffect, useRef } from "react";
import useObserver from "../hooks/useObserver";
import Loader from "./Loader";
import styled from "styled-components";

const TopBottomVisor = styled.div`
  width: 100%;
  text-align: center;
  background-color: blue;
  position: relative;
`;

const Visor = ({ toDoWhenReached }) => {
  const toObserve = useRef();
  const [observer, setElements, entries] = useObserver({
    rootMargin: "500px",
    root: null,
  });

  useEffect(() => {
    const element = [toObserve.current];
    setElements(element);
  }, []);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toDoWhenReached();
      }
    });
  }, [observer, entries]);

  return (
    <TopBottomVisor ref={toObserve}>
      <Loader />
      <h1>VISOR</h1>
    </TopBottomVisor>
  );
};

export default Visor;
