import React, { useState } from "react";
import AnimationTimer from "./AnimationTimer";

const CountTimerAnimation = () => {
  const [restart, setRestart] = useState(0);
  const [toggle, setToggle] = useState(false);

  function start() {
    setToggle(true);
  }

  function stop() {
    setToggle(false);
  }

  function reset() {
    setRestart((s) => s + 1);
  }

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-3 text-center">
          <button className="btn btn-lg btn-success" onClick={start}>
            Start
          </button>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-lg btn-warning" onClick={stop}>
            Stop
          </button>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-lg btn-danger" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <AnimationTimer toggle={toggle} restart={restart} totalSeconds={60} />
      </div>
    </div>
  );
};

export default CountTimerAnimation;
