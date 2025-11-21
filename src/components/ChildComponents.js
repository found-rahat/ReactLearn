import React from "react";

function ChildComponents(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler("child")}>Click Me!</button>
    </div>
  );
}

export default ChildComponents;
