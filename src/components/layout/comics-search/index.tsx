import React, { useEffect } from "react";
import ComicBook from "./comic-book";
import SearchBar from "./search-bar";
import { marvelRequest } from "../../../utils/requests";

export default function ComicsSearch() {
  const [comics, setComics] = React.useState<any[]>([]);
  const [offset, setOffset] = React.useState(10);

  const getComics = async () => {
    let newComics = await marvelRequest("/comics", "?limit=10");
    setComics(newComics);
  };

  const loadMore = async () => {
    setOffset(offset + 10);
    let newComics = await marvelRequest(
      "/comics",
      `?offset=${offset}&limit=10`
    );
    setComics(newComics);
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <>
      <SearchBar updateComics={setComics} />

      <div style={styles.container}>
        {comics ? (
          comics.map((comic) => (
            <ComicBook
              title={
                comic.title
                  ? comic.title
                  : comic.name
                  ? comic.name
                  : comic.firstName + " " + comic.lastName
              }
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              creators={comic.creators}
            />
          ))
        ) : (
          <p>No items to list</p>
        )}
      </div>

      {comics && comics.length > 0 && (
        <button className="load-more" onClick={loadMore}>
          load more
        </button>
      )}
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    width: 800,
  },
};
