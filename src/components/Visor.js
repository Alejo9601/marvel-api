import { useEffect, useRef } from "react";
import useObserver from "../hooks/useObserver";
import Loader from "./Loader";
import styled from "styled-components";

const TopBottomVisor = styled.div`
  height: 20px;
  width: 100%;
  text-align: center;
  background-color: transparent;
  position: relative;
`;

const Visor = ({ toDoWhenReached }) => {
  const toObserve = useRef();
  const [observer, setElements, entries] = useObserver({
    threshold: 1,
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
    </TopBottomVisor>
  );
};

export default Visor;
