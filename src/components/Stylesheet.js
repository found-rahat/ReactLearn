import React from "react";
import "./mystyle.css";

function Stylesheet(props) {
  const primary = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`font-xl ${primary}`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
