import React from "react";

type Props = {
  image: string;
  title: string;
  creators: any;
};

export default function ComicBook(props: Props) {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={props.image} alt={props.title} />
      <p style={styles.title}>
        <p>{props.title.toUpperCase()}</p>
        {props.creators && props.creators.available >= 1 && (
          <span style={styles.author}>
            {props.creators.items[0].name.toUpperCase()}
          </span>
        )}
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column" as const,
    width: 250,
    height: 450,
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    width: 250,
    height: 350,
  },
  title: {
    fontWeight: "bold",
    height: 50,
    fontSize: 13,
    lineHeight: 1,
    flexDirection: "column" as const,
    flexWrap: "wrap" as const,
    textAlign: "center" as const,
    alignContent: "center",
    alignSelf: "center",
  },
  author: {
    borderBottom: "1px solid black",
    fontWeight: "normal",
    fontSize: 12,
  },
};
