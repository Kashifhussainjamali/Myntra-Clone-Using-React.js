import React, { useState, useEffect } from 'react';
import style from "./timmer.module.css"
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const endTime = new Date("2024-10-11T23:10:00").getTime(); // Set your end time
    const currentTime = new Date().getTime();
    const difference = endTime - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 48),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className={style["maindiv"]}>
      <h2 className={style["text"]}>
        <p style={{paddingTop:"12px"}}>Sale Ends In <span style={{color:"red"}}>{formatTime(timeLeft.hours)}</span> H : <span style={{color:"red"}}>{formatTime(timeLeft.minutes)}</span> M : <span style={{color:"red"}}>{formatTime(timeLeft.seconds)}</span> S</p>
      </h2>
    </div>
  );
};

export default CountdownTimer;
