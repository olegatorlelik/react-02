import React from "react";
import style from "./styleButton.module.css";

const Tap = ({ label, clickFunction }) => {
  return (
    <div className={style.box__name}>
      <button onClick={() => clickFunction(label)}>{label}</button>
    </div>
  );
};

export default Tap;
