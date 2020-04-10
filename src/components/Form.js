import React from "react";

function Form(props) {
  const data = props.data;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  return (
    <form className="meme-form">
      <button onClick={handleClick}>
        <i className="icon-arrows-cw"></i>
      </button>
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
    </form>
  );
}

export default Form;
