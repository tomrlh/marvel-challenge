import React from "react";

export default function Icon(props: {
  size: number;
  src: string;
  alt: string;
}) {
  return <img src={props.src} alt={props.alt} style={styles.image} />;
}

const styles = {
  image: {
    width: 18,
    height: 18,
    paddingLeft: 9,
    paddingRight: 9,
    alignSelf: "center",
  },
};

Icon.defaultProps = {
  size: 18,
  src: "",
  alt: "",
};
