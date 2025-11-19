import React from "react";
const jsx = () => {
  //   return (
  //     <div>
  //       <h1>Hello Shahinur</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "rahat", className: "dummeyclass" },
    React.createElement("h1", null, "Hello Shahinur")
  );
};
export default jsx;
