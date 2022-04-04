import React from "react";
import HeaderLeftSide from "./left-side";
import RightHeaderSide from "./right-side";

export default function Header() {
  return (
    <div style={styles.container}>
      <HeaderLeftSide />
      <RightHeaderSide />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
};
