import React, { useState } from "react";
import style from "./styleButton.module.css";

const LoaderHi = () => {
  let [temp, setTemp] = useState(false);
  let [title, setTitle] = useState("");

  const loading = () => {
    setTitle((title = ""));
    setTemp((temp = !temp));
    setTimeout(() => {
      setTemp((temp = !temp));
      setTitle((title = "Hello React"));
    }, 3000);
  };

  return (
    <div className={style.box__name}>
      <div className={temp ? style.loader : ""}>{title}</div>
      <button onClick={loading}>lol</button>
    </div>
  );
};

export default LoaderHi;
