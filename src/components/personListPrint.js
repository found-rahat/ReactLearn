import React from "react";

function personListPrint({ person }) {
  //   console.log(person);
  return (
    <div>
      <h1>
        I am {person.name}. I am a {person.age} Years old. My Skill is{" "}
        {person.skill}
      </h1>
    </div>
  );
}

export default personListPrint;
