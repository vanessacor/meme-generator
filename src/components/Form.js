import React from "react";

function Form(props) {
  const data = props.data;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  return (
    <form className="meme-form">
      <input
        type="text"
        name="topText"
        placeholder="Top Text"
        value={data.topText}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="bottomText"
        placeholder="Bottom Text"
        value={data.bottomText}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Gen</button>
    </form>
  );
}

export default Form;
