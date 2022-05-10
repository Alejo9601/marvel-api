import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";
import useGetCharacters from "../hooks/useGetCharacters";

const ListOfCharacters = styled.section`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
`;

const CharacterList = () => {
  const [characters, totalCharacters, getCharacters] = useGetCharacters();
  const imgSize = "standard_fantastic";

  return (
    <ListOfCharacters>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          imgSrc={`${character.thumbnail.path}/${imgSize}.jpg`.replace(
            "http",
            "https"
          )}
        />
      ))}
    </ListOfCharacters>
  );
};

export default CharacterList;
