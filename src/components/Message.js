import React from "react";
import style from "styled-components";

const Container = style.div`
  
`;

const Message = ({ msg }) => {
  return (
    <Container>
      <p>{msg}</p>
    </Container>
  );
};

export default Message;
