import React from "react";
import ImageHeader from "./ImageHeader.png";

function Header() {
  return (
    <header>
      <img alt="troll face" src={ImageHeader} />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
