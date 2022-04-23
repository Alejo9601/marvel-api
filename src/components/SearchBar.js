import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import HeroContext from "../context/HeroContext";
import sURL from "../assets/json/settingsUrl.json";
import { helpHttp } from "../helpers/helpHttp";

const Container = styled.div`
  display: flex;
  align-items: center;
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
  const { setHeroData } = useContext(HeroContext);

  const handleOnChange = (event) => {
    let tecla = document.all ? event.keyCode : event.which;
    if (tecla === 13) {
      const character = event.target.value;
      const url = `${sURL.baseUrl}${character}${sURL.ts}${sURL.publicKey}${sURL.md5Hash}`;
      helpHttp()
        .get(url)
        .then((res) => {
          if (res.data.results[0]) {
            console.log("entre a cambiar el valor");
            event.target.value = "";
            setHeroData(res);
          }
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
