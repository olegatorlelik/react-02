import React, { useState } from "react";
import styleButton from "./styleButton.module.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const changeNumber = (x) => {
    setNumber(number + x);
  };
  return (
    <div className={styleButton.box}>
      <button onClick={() => changeNumber(1)} className={styleButton.btn}>
        +
      </button>
      <span className={styleButton.title}>{number}</span>
      <button onClick={() => changeNumber(-1)} className={styleButton.btn}>
        -
      </button>
    </div>
  );
};

export default Counter;
