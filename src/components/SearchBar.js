import { useContext } from "react";
import styled from "styled-components";
import CharacterContent from "../context/CharacterContext";
import { helpHttp } from "../helpers/helpHttp";
import { characterUrlFor } from "../helpers/urlsGenerator";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    padding-bottom: 20px;
  }
`;

const Input = styled.input`
  background-color: white;
  height: 30px;
  border-radius: 4px;
  border: 0px;
  width: 400px;
  text-align: center;
  font-size: 1.6rem;
  outline: none;
  /* box-shadow: 0px 0px 1.5px 0px inset black; */

  ::placeholder {
    color: lightgray;
    font-size: 1.5rem;
  }

  @media (max-width: 550px) {
    width: 360px;
    height: 50px;
  }
`;

const SearchBar = () => {
  const { setCharData } = useContext(CharacterContent);

  const handleKeyDown = (event) => {
    let keyPressed = document.all ? event.keyCode : event.which;
    let enter = 13;
    if (keyPressed === enter && event.target.value !== "") {
      const charName = event.target.value;
      helpHttp()
        .get(characterUrlFor(charName))
        .then((res) => {
          setCharData(res);
          event.target.value = "";
          document.activeElement?.blur();
        });
    }
  };

  return (
    <Container>
      <Input
        type="text"
        name="search"
        placeholder="make a character search here..."
        onKeyDown={handleKeyDown}
      ></Input>
    </Container>
  );
};

export default SearchBar;
