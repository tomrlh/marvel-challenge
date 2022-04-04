import React from "react";
import RightSideBottom from "./bottom";
import RightSideTop from "./top";

export default function RightHeaderSide() {
  return (
    <div style={styles.container}>
      <RightSideTop />
      <RightSideBottom />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-end",
    flexDirection: "column" as const,
  },
};
