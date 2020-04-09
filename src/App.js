import React from "react";
import "./App.css";
import Banner from "./components/Banner.js";
import Memegenerator from "./components/Memegenerator";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Memegenerator />
    </div>
  );
}

export default App;
