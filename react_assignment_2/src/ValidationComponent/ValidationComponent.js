import React from "react";

const ValidationComp = (props) => {
  let validationMessage = "Text long Enough";
  if (props.inputLength <= 5) {
    validationMessage = "Text too Short";
  }
  return (
    <div className="">
      {/* //using this method we can print the message 
      {props.inputLength > 5 ? <p>Text long Enough</p> : <p>Text too Short</p>} */}
      <p>{validationMessage}</p>
      <p>text length {props.inputLength}</p>
    </div>
  );
};

export default ValidationComp;
