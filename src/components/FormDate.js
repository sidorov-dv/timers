import React, { useState } from "react";

const FormDate = ({ sendDate }) => {
  const [countDownDate, setCountDownDate] = useState("");

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  currentDate.setDate(currentDate.getDate() + 1);
  let day = currentDate.getDate();
  let dateStringCurrent = `${year}-${
    (month + 1).toString().length === 1 ? "0" + (month + 1) : month + 1
  }-${day.toString().length === 1 ? "0" + day : day}`;

  const countDownDateHahdler = (e) => {
    setCountDownDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (countDownDate) {
      sendDate(countDownDate);
      setCountDownDate("");
    } else return;
  };

  const resetCountDownDateHahdler = () => {
    setCountDownDate("");
    sendDate(countDownDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="countdown-date" className="form-label fs-3">
          Countdown date
        </label>
        <input
          type="date"
          min={dateStringCurrent}
          max="2100-12-31"
          name="dateInput"
          className="form-control"
          id="countdown-date"
          aria-describedby="helper"
          value={countDownDate}
          onChange={countDownDateHahdler}
        />
        <div id="helper" className="form-text text-dark">
          You need to choose date to countdown
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-success text-wrap mb-3 me-3 fs-5"
      >
        Run countdown
      </button>
      <button
        type="button"
        onClick={resetCountDownDateHahdler}
        className="btn btn-danger text-wrap mb-3 fs-5"
      >
        Reset countdown
      </button>
    </form>
  );
};

export default FormDate;
