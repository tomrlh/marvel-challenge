import React from "react";

export default function HeaderLeftSide() {
  return (
    <div style={styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png"
        alt="marvel_brand"
        width="200"
      />

      <div style={styles.socialMedia}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png"
          alt="facebook"
          style={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
          alt="youtube"
          style={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25347.png"
          alt="twitter"
          style={styles.icon}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  socialMedia: {
    display: "flex",
  },
  icon: {
    width: 20,
    height: 20,
    padding: 10,
    alignContent: "center",
    alignSelf: "flex-end",
  },
};
