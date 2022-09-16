import React from "react";
import styles from "./ScreenAnimation.module.css";

const ScreenAnimation = () => {
  return (
    <div className={styles.body_animation}>
      <div className={styles.animation01}>
        <div className={styles.rhombus_small}>
          <div className={styles.rhombus}>
            <div className={styles.border_box}>
              <span className={`${styles.line} ${styles.line01}`}></span>
              <span className={`${styles.line} ${styles.line02}`}></span>
              <span className={`${styles.line} ${styles.line03}`}></span>
              <span className={`${styles.line} ${styles.line04}`}></span>
              <span className={`${styles.circle} ${styles.circle01}`}></span>
              <span className={`${styles.circle} ${styles.circle02}`}></span>
              <span className={`${styles.circle} ${styles.circle03}`}></span>
              <span className={`${styles.circle} ${styles.circle04}`}></span>
              <span
                className={`${styles.animation_line} ${styles.animation_line01}`}
              ></span>
              <span
                className={`${styles.animation_line_wrapper} ${styles.animation_line02_wrapper}`}
              >
                <span
                  className={`${styles.animation_line} ${styles.animation_line02}`}
                ></span>
              </span>
              <span
                className={`${styles.animation_line} ${styles.animation_line03}`}
              ></span>
              <span
                className={`${styles.animation_line_wrapper} ${styles.animation_line04_wrapper}`}
              >
                <span
                  className={`${styles.animation_line} ${styles.animation_line04}`}
                ></span>
              </span>
              <span
                className={`${styles.animation_line} ${styles.animation_line05}`}
              ></span>
              <span
                className={`${styles.animation_line_wrapper} ${styles.animation_line06_wrapper}`}
              >
                <span
                  className={`${styles.animation_line} ${styles.animation_line06}`}
                ></span>
              </span>
              <span
                className={`${styles.animation_line} ${styles.animation_line07}`}
              ></span>
              <span
                className={`${styles.animation_line_wrapper} ${styles.animation_line08_wrapper}`}
              >
                <span
                  className={`${styles.animation_line} ${styles.animation_line08}`}
                ></span>
              </span>
            </div>
            <div className={styles.wave}>
              <div className={styles.wave_wrapper}>
                <div className={styles.wave_box}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.animation02}>
        <div className={styles.rhombus_box}>
          <span
            className={`${styles.rhombus_item_wrapper} ${styles.rhombus_item01_wrapper}`}
          >
            <span className={styles.rhombus_item}></span>
          </span>
          <span
            className={`${styles.rhombus_item_wrapper} ${styles.rhombus_item02_wrapper}`}
          >
            <span className={styles.rhombus_item}></span>
          </span>
        </div>
        <div className={styles.double_content}>
          <div className={`${styles.double_wrapper02} ${styles.dotted02}`}>
            <div className={styles.dotted_hide}>
              <div className={`${styles.double_wrapper01} ${styles.dotted01}`}>
                <span className={styles.dotted_right}></span>
              </div>
            </div>
          </div>
          <div className={`${styles.double_wrapper02} ${styles.white02}`}>
            <div
              className={`${styles.double_wrapper01} ${styles.white01}`}
            ></div>
          </div>
          <div className={`${styles.double_wrapper02} ${styles.gray02}`}>
            <div
              className={`${styles.double_wrapper01} ${styles.gray01}`}
            ></div>
          </div>
          <div className={`${styles.double_wrapper02} ${styles.orange02}`}>
            <div
              className={`${styles.double_wrapper01} ${styles.orange01}`}
            ></div>
          </div>
        </div>
        <div className={styles.name}>
          <p className="text-center">You are welcome to React App</p>
          <span className={styles.name_circle01}></span>
          <span className={styles.name_circle02}></span>
        </div>
      </div>
    </div>
  );
};

export default ScreenAnimation;
