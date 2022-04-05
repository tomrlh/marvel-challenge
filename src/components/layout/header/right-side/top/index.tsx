import React from "react";
import Icon from "../../../global/Icon";

export default function RightSideTop() {
  return (
    <div style={styles.container}>
      <p style={styles.options}>WELCOME</p>
      <Icon src="https://i.stack.imgur.com/k59em.png" alt="three_dots" />
      <p style={styles.options}>MY ACCOUNT</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  options: {
    height: 20,
    fontSize: 12,
    alignSelf: "center",
  },
};
