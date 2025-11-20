import React from "react";
// function Greet(props) {
//   console.log(props);
//   return <h1>Hello {props.name}</h1>;
// }
// const Greet = (props) => {
//   return (
//     <h5>
//       Hello {props.name} , Hero is {props.heroName} And his Age is {props.Age}
//     </h5>
//   );
// };

// const Greet = ({ name, heroName, Age }) => {
//   return (
//     <h5>
//       Hello {name} , Hero is {heroName} And his Age is {Age}
//     </h5>
//   );
// };
const Greet = (props) => {
  const { name, heroName, Age } = props;
  return (
    <h5>
      Hello {name} , Hero is {heroName} And his Age is {Age}
    </h5>
  );
};
export default Greet;
