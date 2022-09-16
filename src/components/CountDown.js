import React, { useEffect, useState } from "react";
import classes from "./CountDown.module.css";

const CountDown = ({ countDownDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let timer;
    let futureDate;
    let difference;
    if (countDownDate) {
      futureDate = new Date(countDownDate).getTime();
      timer = setInterval(() => {
        let nowDate = new Date().getTime();
        difference = futureDate - nowDate;
        setDays((prev) => Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours((prev) =>
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes((prev) =>
          Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        );
        setSeconds((prev) => Math.floor((difference % (1000 * 60)) / 1000));
        if (difference <= 0) {
          clearInterval(timer);
          setStop(true);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [countDownDate]);

  return (
    <>
      <div className={classes.content}>
        <div className={classes.data}>
          <p>{days}</p>
          <p>days</p>
        </div>
        <div className={classes.data}>
          <p>{hours}</p>
          <p>hours</p>
        </div>
        <div className={classes.data}>
          <p>{minutes}</p>
          <p>minutes</p>
        </div>
        <div className={classes.data}>
          <p>{seconds}</p>
          <p>seconds</p>
        </div>
      </div>
      {stop && (
        <div className={classes.time_text}>
          <h1 className="fw-bolder">Time is over</h1>
        </div>
      )}
    </>
  );
};

export default CountDown;
