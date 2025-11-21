import React from "react";

function keyIndex() {
  const names = ["rahat", "Alia", "Maa", "Maa"];
  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index}
      {name}
    </h1>
  ));

  return <div>{nameList}</div>;
  return <div></div>;
}

export default keyIndex;
