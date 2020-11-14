import React, { useState } from "react";
import stylePlayStop from "./stylePlayStop.module.css";

const PlayStop = () => {
  let [state, setState] = useState(false);
  return (
    <div>
      <div
        className={
          state
            ? `${stylePlayStop.loader} ${stylePlayStop.animated}`
            : `${stylePlayStop.loader}`
        }
      ></div>
      <button onClick={() => setState((state = !state))}>
        {state ? <span>stop</span> : <span>play</span>}
      </button>
    </div>
  );
};

export default PlayStop;
