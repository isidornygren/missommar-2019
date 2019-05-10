import React from "react";
import "./App.css";
import NavBar from "./navbar";
import Info from "./info";
import Filmer from "./filmer";
import Kontakt from "./kontakt";
import CountDown from "./countdown";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountDown />
      <Info />
      <Filmer />
      <Kontakt />
    </div>
  );
}

export default App;
