
import React from "react";
import Countdown from "react-countdown";
import './Countdown.css';

function Timer() {
  return (
    <div className="countdown-card">

      <div className="countdown-top-ornament">
        ✦ ❧ ✦
      </div>

      <span className="section-label">The Big Day</span>

      <div className="countdown-heading-divider">
        <span></span>
        <b>❦</b>
        <span></span>
      </div>

      <p className="countdown-quote">
        The start of a beautiful journey, shared with the ones we <br />
        love most
      </p>

      <p className="countdown-date">
        Thursday · 03rd December 2026
      </p>

      <div className="countdown-display">
        <Countdown
          className="countdown-number"
          date={new Date("2026-12-03T09:08:30")}
        />
      </div>

      <p className="countdown-label">
        DAYS <span> - </span> HRS <span> - </span> MINS <span> - </span> SEC
      </p>

      <div className="countdown-bottom-ornament">
        ❧ &nbsp; Forever Begins Here &nbsp; ❧
      </div>

    </div>
  );
}

export default Timer;
