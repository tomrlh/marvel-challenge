import React from "react";
import Icon from "../global/Icon";

export default function NavBar() {
  return (
    <div style={styles.container}>
      <p style={styles.shop}>SHOP</p>

      <Icon src="/img/more.png" alt="three_dots" />

      <ul style={styles.menu}>
        <li style={styles.item}>New!</li>
        <li style={styles.item}>Comics</li>
        <li style={styles.item}>Characters</li>
        <li style={styles.item}>Clothes</li>
        <li style={styles.item}>Acessories</li>
        <li style={styles.item}>Toys</li>
        <li style={styles.item}>Home Décor</li>
        <li style={styles.item}>Entertainment</li>
        <li style={styles.item}>Collectibles</li>
        <li style={styles.item}>Sales</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#202020",
    width: "100%",
    height: 50,
    fontSize: 15,
  },
  menu: {
    display: "flex",
    padding: 5,
    alignSelf: "center",
    flexDirection: "row" as const,
    color: "white",
    listStyleType: "none",
  },
  item: {
    padding: 5,
  },
  shop: {
    color: "white",
    display: "flex",
    alignSelf: "center",
  },
};
