import React from "react";

function MemeText(props) {
  const data = props.data;
  return (
    <div className="meme">
      <img src={data.randomImg} alt="" />
      <h2 className="top">{data.topText}</h2>
      <h2 className="bottom">{data.bottomText}</h2>
    </div>
  );
}

export default MemeText;
