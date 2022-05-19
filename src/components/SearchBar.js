import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 3px;

  @media (max-width: 550px) {
    padding-bottom: 20px;
  }
`;

const InputSearch = styled.input`
  height: 30px;
  border-radius: 4px;
  border: 0px;
  width: 350px;
  text-align: center;
  font-size: 1.6rem;
  outline: none;
  /* box-shadow: 0px 0px 1.5px 0px inset black; */

  ::placeholder {
    color: lightgray;
    font-size: 1.5rem;
  }

  @media (max-width: 550px) {
    width: 350px;
    height: 50px;
  }
`;
const InputButton = styled.input`
  background-color: lightgray;
  color: black;
  height: 30px;
  padding: 0px 10px;
  border: 0px;
  cursor: pointer;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const toSearch = inputRef.current.value;
    if (toSearch === "") {
      alert("Please insert more than two (2) characters to search");
      return;
    }
    inputRef.current.value = "";
    document.activeElement?.blur();
    navigate(`/character-search/${toSearch}`);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputSearch
        type="search"
        name="search"
        placeholder="make a character search here..."
        autoComplete="off"
        ref={inputRef}
      ></InputSearch>
      <InputButton type="submit" name="button" value="Search" />
    </Container>
  );
};

export default SearchBar;
