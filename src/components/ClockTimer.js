import React, { useState, useEffect } from "react";
import classes from "./ClockTimer.module.css";

const alarm = require("../music/HellsBells.mp3");
const sound = new Audio(alarm);

const ClockTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [toggle, setToggle] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    sound.load();
    sound.loop = true;
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (displayMessage) {
      sound.play();
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  }, [displayMessage]);

  useEffect(() => {
    if (toggle) {
      let timerID = setInterval(() => {
        clearInterval(timerID);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes((m) => m - 1);
          } else {
            let newMinutes = displayMessage ? 24 : 4;
            let newSeconds = 59;
            setSeconds(newSeconds);
            setMinutes(newMinutes);
            setDisplayMessage((display) => !display);
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }
    // eslint-disable-next-line
  }, [seconds, toggle]);

  function start() {
    setToggle(true);
    if (displayMessage) sound.play();
  }
  function stop() {
    setToggle(false);
    if (displayMessage) sound.pause();
  }

  function reset() {
    setToggle(false);
    setTimeout(() => {
      setSeconds(0);
      setMinutes(25);
      setDisplayMessage(false);
    }, 1200);
  }

  function addMin() {
    if (minutes >= 0 && minutes < 59) {
      setMinutes((m) => m + 1);
    }
  }

  function decMin() {
    if (minutes >= 1 && minutes <= 59) {
      setMinutes((m) => m - 1);
    }
  }

  function addSec() {
    if (seconds >= 0 && seconds < 59) {
      setSeconds((s) => s + 1);
    }
  }

  function decSec() {
    if (seconds >= 1 && seconds <= 59) {
      setSeconds((s) => s - 1);
    }
  }

  return (
    <div className="container">
      <div className={classes.content}>
        <div className={classes.clock}>
          {displayMessage && (
            <div className={classes.message}>
              Break time! New session starts in:
            </div>
          )}
        </div>
        <div className={classes.box_timer}>
          <div className={classes.minutes}>
            <button
              disabled={toggle}
              className={`${classes.btn_arr + " btn btn-outline-dark"}`}
              onClick={addMin}
            >
              <i className="bi bi-arrow-up-square"></i> Up
            </button>
            <div
              className={`${
                displayMessage ? classes.timer_5 : classes.timer_25
              }`}
            >
              {timerMinutes}
            </div>
            <button
              disabled={toggle}
              className={`${classes.btn_arr + " btn btn-outline-dark"}`}
              onClick={decMin}
            >
              <i className="bi bi-arrow-down-square"></i> Down
            </button>
          </div>
          <div
            className={`${displayMessage ? classes.timer_5 : classes.timer_25}`}
          >
            :
          </div>
          <div className={classes.seconds}>
            <button
              disabled={toggle}
              className={`${classes.btn_arr + " btn btn-outline-dark"}`}
              onClick={addSec}
            >
              <i className="bi bi-arrow-up-square"></i> Up
            </button>
            <div
              className={`${
                displayMessage ? classes.timer_5 : classes.timer_25
              }`}
            >
              {timerSeconds}
            </div>
            <button
              disabled={toggle}
              className={`${classes.btn_arr + " btn btn-outline-dark"}`}
              onClick={decSec}
            >
              <i className="bi bi-arrow-down-square"></i> Down
            </button>
          </div>
        </div>
        <div className={classes.controls}>
          <button className="btn btn-lg btn-success me-3" onClick={start}>
            Start
          </button>
          <button className="btn btn-lg btn-warning me-3" onClick={stop}>
            Stop
          </button>
          <button className="btn btn-lg btn-danger" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClockTimer;
