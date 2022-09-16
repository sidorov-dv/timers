import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import classes from "./CountTimerStyles.module.css";

const renderTime = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  if (remainingTime === 0) {
    return <h2 className={classes.break_text}>Time is over!</h2>;
  }

  return (
    <div className={classes.countdown}>
      <p>Remaining</p>
      <p>
        {timerMinutes} : {timerSeconds}
      </p>
      <p>min : sec</p>
    </div>
  );
};

const AnimationTimer = ({ toggle, restart, totalSeconds }) => {
  return (
    <div className={classes.circle_timer}>
      <CountdownCircleTimer
        isPlaying={toggle}
        key={restart}
        size={400}
        strokeWidth={20}
        trailStrokeWidth={30}
        trailColor="#2d2c2c"
        duration={totalSeconds}
        colors={[
          "#9400D3",
          "#4B0082",
          "#0000FF",
          "#00FF00",
          "#FFFF00",
          "#FF7F00",
          "#FF0000",
        ]}
        colorsTime={[
          totalSeconds,
          0.83 * totalSeconds,
          0.66 * totalSeconds,
          0.49 * totalSeconds,
          0.32 * totalSeconds,
          0.15 * totalSeconds,
          0,
        ]}
        onComplete={() => {
          return { shouldRepeat: false };
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default AnimationTimer;
