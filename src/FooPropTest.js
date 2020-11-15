import React from "react";
import style from "./styleButton.module.css";

const FooPropTest = (props) => {
  return (
    <div>
      <Tap label="One" clickFunction={() => alert("CLICK ONE")} />
      <Tap
        label="Two"
        clickFunction={() => {
          console.log("Click two");
        }}
      />
      <Tap
        label="Tree"
        clickFunction={(params) => {
          console.log("THIS IS" + params);
        }}
      />
    </div>
  );
};

const Tap = ({ label, clickFunction }) => {
  return (
    <div className={style.box__name}>
      <button onClick={() => clickFunction(label)}>{label}</button>
    </div>
  );
};

export default FooPropTest;
