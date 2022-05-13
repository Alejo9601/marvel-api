import styled from "styled-components";
import ListOfCharacters from "../components/ListOfCharacters";
import useGetCharacters from "../hooks/useGetCharacters";

const Characters = styled.section`
  min-height: 100vh;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: lightblue;
  color: white;
  width: 100%;
  height: fit-content;
  text-align: center;
  font-size: 2rem;
  margin-top: 20px;
`;

const CharacterList = () => {
  const { characters, getCharacters } = useGetCharacters();

  const handleClick = () => {
    getCharacters();
  };

  return (
    <Characters>
      <Button onClick={handleClick}>CLICK TO LOAD NEW CHARACTERS</Button>
      <ListOfCharacters characters={characters} />
    </Characters>
  );
};

export default CharacterList;
