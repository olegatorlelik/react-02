import React, { useState } from "react";
import style from "./styleButton.module.css";
import names from "./names.json";

const TestName = () => {
  const [arrName, setName] = useState([
    { name: names[Math.floor(Math.random() * 13)] },
    { name: names[Math.floor(Math.random() * 13)] },
    { name: names[Math.floor(Math.random() * 13)] },
  ]);
  const getRandomName = () => {
    let newPeople = [
      ...arrName,
      { name: names[Math.floor(Math.random() * 13)] },
    ];
    setName(newPeople);
  };
  return (
    <div className={style.box__name}>
      {arrName.map((elem, index) => {
        return <p key={index}>{elem.name}</p>;
      })}
      <button onClick={getRandomName}>Add Name</button>
    </div>
  );
};

export default TestName;
