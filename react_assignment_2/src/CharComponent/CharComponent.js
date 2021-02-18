import reactDom from "react-dom";
import React from "react";
import "../App.css";

const CharComp = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
    // backgroundColor: "lightsteelblue",
    // boxShadow: "0 4px 12px lightgreen",
    // borderRadius: "10px",
  };
  return (
    <div style={style} onClick={props.click}>
      {props.charactor}
    </div>
  );
};

export default CharComp;
