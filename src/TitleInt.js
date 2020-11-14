import React, { useState } from "react";
import StyleTitleInt from "./StyleTitleInt.module.css";

const TestForm = () => {
  const [value, setValue] = useState("");

  return (
    <div className={StyleTitleInt.box}>
      <input
        className={StyleTitleInt.int}
        type="text"
        placeholder="test"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default TestForm;
