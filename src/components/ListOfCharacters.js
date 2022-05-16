import CharacterCard from "./CharacterCard";
import Loader from "./Loader";

const ListOfCharacters = ({ characters }) => {
  const imgSize = "standard_fantastic";

  return (
    <>
      {characters.length !== 0 ? (
        characters.map((character) => (
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
    </>
  );
};

export default ListOfCharacters;
