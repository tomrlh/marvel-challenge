import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/header";
import NavBar from "./components/layout/nav-bar";
import Carrousel from "./components/layout/carrousel";
import ComicsSearch from "./components/layout/comics-search";

function App() {
  return (
    <div style={styles.container}>
      <Header />

      <NavBar />

      <Carrousel />

      <ComicsSearch />
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};
