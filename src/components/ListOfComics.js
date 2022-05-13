import ComicCard from "./ComicCard";

const ListOfComics = ({ comics }) => {
  const imgSize = "portrait_fantastic";

  return (
    <>
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          imgSrc={`${comic.thumbnail.path}/${imgSize}.jpg`.replace(
            "http",
            "https"
          )}
        />
      ))}
    </>
  );
};

export default ListOfComics;
