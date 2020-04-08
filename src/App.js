import React from "react";
import "./App.css";
import Memegenerator from "./components/Memegenerator";
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
