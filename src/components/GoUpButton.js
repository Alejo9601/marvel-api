import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 3;
  background-color: aliceblue;
`;
const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
  position: absolute;
  bottom: 0px;
  right: 0px;

  p {
    color: white;
    font-size: 2rem;
  }
`;

const GoUpButton = () => {
  return (
    <Wrapper>
      <Button>
        <p>{`^`}</p>
      </Button>
    </Wrapper>
  );
};

export default GoUpButton;
