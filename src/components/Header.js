import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import image_clock from "../images/sandTimer.jpg";
import Video from "./Video";

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timerID = setInterval(() => {
      setVisible((prev) => !prev);
    }, 3000);
    return () => {
      clearInterval(timerID);
    };
  }, [visible]);

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className={classes.text_info}>
            <h1 className={classes.greeting}>Plan your time</h1>
            {visible && (
              <p className={classes.prompt}>
                Please select from the menu the timer you need to work with.
              </p>
            )}
          </div>
        </div>
        <div className={classes.clock}>
          <div className={classes.clock_content}>
            <img className={classes.image} src={image_clock} alt="clock" />
          </div>
        </div>
      </div>
      <div className={classes.video}>
        <Video />
      </div>
    </>
  );
};

export default Header;
