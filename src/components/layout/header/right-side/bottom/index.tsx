import React from "react";
import Icon from "../../../global/Icon";

export default function RightSideBottom() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="SEARCH MARVEL SHOP"
        style={styles.searchInput}
      />

      <Icon src="https://i.stack.imgur.com/k59em.png" alt="three_dots" />

      <Icon
        src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1649082600~hmac=d8293835c288994f16eb69c822cd64c7"
        alt="cart"
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  searchInput: {
    width: 200,
    borderWidth: "0 0 2px",
    background:
      "url(https://cdn-icons-png.flaticon.com/512/149/149852.png) no-repeat scroll right",
    backgroundSize: 15,
    outline: 0,
  },
};
