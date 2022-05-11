import { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import useGetCharacters from "../hooks/useGetCharacters";

const ListOfCharacters = styled.section`
  min-height: 100vh;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
`;

const CharacterList = () => {
  const [characters, getCharacters] = useGetCharacters();
  const [charArray, setCharArray] = useState([]);
  const imgSize = "standard_fantastic";

  const handleScroll = () => {
    var y = window.scrollY;
    if (y > window.innerHeight) {
      getCharacters();
    }
  };

  useEffect(() => {
    getCharacters();
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCharArray(characters);
  }, [characters]);

  return (
    <ListOfCharacters>
      {charArray.length !== 0 ? (
        charArray.map((character) => (
          <CharacterCard
            key={character.id}
            imgSrc={`${character.thumbnail.path}/${imgSize}.jpg`.replace(
              "http",
              "https"
            )}
            charName={character.name}
          />
        ))
      ) : (
        <Loader />
      )}
    </ListOfCharacters>
  );
};

export default CharacterList;
