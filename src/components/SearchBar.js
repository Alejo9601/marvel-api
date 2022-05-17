import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.form`
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
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value !== "") {
      const charName = inputRef.current.value;
      inputRef.current.value = "";
      document.activeElement?.blur();
      navigate(`/character-search/${charName}`);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        placeholder="make a character search here..."
        autoComplete="off"
        ref={inputRef}
      ></Input>
    </Container>
  );
};

export default SearchBar;
