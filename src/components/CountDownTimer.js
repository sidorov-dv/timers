import React, { useState } from "react";
import CountDown from "./CountDown";
import FormDate from "./FormDate";
import classes from "./CountDownTimer.module.css";

const CountDownTimer = () => {
  const [date, setDate] = useState();

  const countDownDateHandler = (date) => {
    if (date) {
      setDate(new Date(date));
    } else {
      setDate("");
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className={classes.header_text}>Countdown timer</h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col col-md-6">
          <FormDate sendDate={countDownDateHandler} />
        </div>
      </div>
      {date && (
        <div className="row mb-5">
          <div className="col">
            <h3>Countdown to: {date.toDateString()}</h3>
            <CountDown countDownDate={date} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
