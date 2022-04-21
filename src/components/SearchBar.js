import styled from "styled-components";
import { HttpRequest } from "../helpers/HttpRequest";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: white;
  height: 30px;
  border-radius: 10px;
  border: 0px;
  width: 400px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2rem;
  outline: none;
`;

const handleOnChange = (event) => {
  let tecla = document.all ? event.keyCode : event.which;
  if (tecla == 13) {
    const heroName = event.target.value;
    const url = `https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1000&apikey=e44e037f0d22efbd00cfba40ebaa087c&hash=03354bd7271cb5b03618c27e91b3da61`;
    HttpRequest()
      .get(url, { mode: "cors" })
      .then((res) => console.log(res));
  }
};

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInput
        type="text"
        name="search"
        placeholder="make a character search here..."
        onKeyDown={handleOnChange}
      ></StyledInput>
    </StyledContainer>
  );
};

export default SearchBar;
