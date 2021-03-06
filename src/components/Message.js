import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 40%;
  align-self: center;
  background-color: #ff4040;
  padding: 20px;

  p {
    font-weight: 500;
    font-size: 2rem;
    color: #fff;
  }
`;

const Message = ({ msg }) => {
  return (
    <Container>
      <p>{msg}</p>
    </Container>
  );
};

export default Message;
