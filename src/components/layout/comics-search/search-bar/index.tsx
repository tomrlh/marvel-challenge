import React from "react";
import { marvelRequest } from "../../../../utils/requests";

type Props = {
  updateComics: Function;
};

export default function SearchBar(props: Props) {
  const [query, setQuery] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const searchSeries = async () => {
    let queryParams = query ? `?comics=${query}&limit=10` : "?limit=10";
    let newComics = await marvelRequest("/series", queryParams, setLoading);
    props.updateComics(newComics);
  };

  const searchCharacters = async () => {
    let queryParams = query ? `?name=${query}&limit=10` : "?limit=10";
    let newComics = await marvelRequest("/characters", queryParams, setLoading);
    props.updateComics(newComics);
  };

  const searchCreators = async () => {
    let queryParams = query ? `?firstName=${query}&limit=10` : "?limit=10";
    let newComics = await marvelRequest("/creators", queryParams, setLoading);
    props.updateComics(newComics);
  };

  return (
    <div style={styles.container}>
      {isLoading && <div className="loader"></div>}
      <p style={styles.shop}>BROWSE</p>

      <input
        type="text"
        style={styles.queryInput}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div style={styles.menu}>
        <a
          href="javascript:void(0);"
          style={styles.item}
          onClick={searchSeries}
        >
          SERIES
        </a>
        <a
          href="javascript:void(0);"
          style={styles.item}
          onClick={searchCharacters}
        >
          CHARACTERS
        </a>
        <a
          href="javascript:void(0);"
          style={styles.item}
          onClick={searchCreators}
        >
          CREATORS
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap" as const,
    alignContent: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "#dbdbdb",
    width: "100%",
    height: 50,
    fontSize: 15,
  },
  menu: {
    display: "flex",
    padding: 5,
    alignSelf: "center",

    flexDirection: "row" as const,
    color: "black",
    listStyleType: "none",
  },
  item: {
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    color: "black",
    textDecoration: "none",
  },
  shop: {
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  queryInput: {
    display: "flex",
    width: 100,
    height: 20,
    alignSelf: "center",
    backgroundSize: 15,
    borderWidth: "0 0 2px",
    outline: 0,
  },
};
