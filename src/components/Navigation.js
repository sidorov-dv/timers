import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const overlayMenu = useRef();

  const openNavMenu = () => {
    overlayMenu.current.style.width = "100%";
  };

  const closeNavMenu = () => {
    overlayMenu.current.style.width = "0%";
  };

  return (
    <>
      <nav>
        <ul className="topnav">
          <div className="brand">
            <i className="bi bi-stopwatch-fill"></i>
            <span className="react_brand">React</span>
          </div>
          <li>
            <NavLink
              to="/timers"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="countdown"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Countdown
            </NavLink>
          </li>
          <li>
            <NavLink
              to="timer"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Timer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="animationtimer"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Animation timer
            </NavLink>
          </li>
          <li className="icon" onClick={openNavMenu}>
            <i className="bi bi-list"></i>
          </li>
        </ul>
      </nav>
      <div ref={overlayMenu} className="overlay">
        <button className="closebtn" onClick={closeNavMenu}>
          <i className="bi bi-x-lg"></i>
        </button>
        <ul className="overlay-content" onClick={closeNavMenu}>
          <li>
            <NavLink
              to="/timers"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="countdown"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Countdown
            </NavLink>
          </li>
          <li>
            <NavLink
              to="timer"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Timer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="animationtimer"
              className={({ isActive }) =>
                isActive ? "active_link" : "nav_link"
              }
            >
              Animation timer
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
