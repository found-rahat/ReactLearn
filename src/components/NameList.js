import React from "react";
import PersonListPrint from "./personListPrint";

function NameList() {
  //   const names = ["rahat", "Alia", "Maa"];
  //   const nameList = names.map((name) => <h1>{name}</h1>);
  //   return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "rahat",
      age: 25,
      skill: "CSS",
    },
    {
      id: 2,
      name: "Seam",
      age: 5,
      skill: "code",
    },
    {
      id: 3,
      name: "Khan",
      age: 51,
      skill: "Javascript",
    },
    {
      id: 4,
      name: "Alia",
      age: 30,
      skill: "HTML",
    },
  ];
  const personList = persons.map((person) => (
    <PersonListPrint key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
