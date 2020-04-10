import React from "react";
import ImageHeader from "./ImageHeader.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img alt="troll face" src={ImageHeader} />
        <p>Meme Generator</p>
      </div>
    </header>
  );
}

export default Header;
