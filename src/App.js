import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CountDownTimer from "./components/CountDownTimer";
import ClockTimer from "./components/ClockTimer";
import Navigation from "./components/Navigation";
import ScreenAnimation from "./components/ScreenAnimation";
import NotFound from "./components/NotFound";
import CountTimerAnimation from "./components/CountTimerAnimation";

function App() {
  const [startAnimation, setStartAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => setStartAnimation(false), 7500);
  }, []);
  return (
    <>
      {startAnimation ? (
        <ScreenAnimation />
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/countdown" element={<CountDownTimer />} />
            <Route path="/timer" element={<ClockTimer />} />
            <Route path="/animationtimer" element={<CountTimerAnimation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
