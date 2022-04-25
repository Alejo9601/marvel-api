import { useContext } from "react";
import styled from "styled-components";
import CharacterContent from "../context/CharacterContext";
import sURL from "../assets/json/settingsUrl.json";
import { helpHttp } from "../helpers/helpHttp";

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
  border-radius: 5px;
  border: 0px;
  width: 400px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2rem;
  outline: none;

  ::placeholder {
    color: lightgray;
  }
`;

const SearchBar = () => {
  const { setCharData } = useContext(CharacterContent);

  const handleOnChange = (event) => {
    let tecla = document.all ? event.keyCode : event.which;
    if (tecla === 13 && event.target.value !== "") {
      const character = event.target.value;
      const url = `${sURL.baseUrl}${sURL.charRequest}${character}&${sURL.ts}&${sURL.publicKey}&${sURL.md5Hash}`;
      helpHttp()
        .get(url)
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
        onKeyDown={handleOnChange}
      ></Input>
    </Container>
  );
};

export default SearchBar;
