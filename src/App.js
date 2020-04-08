import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Memegenerator from "./components/memegenerator";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Memegenerator />
    </div>
  );
}

export default App;
