import React from "react";
import "./intro.scss";

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="left">
        <img src="./assests/intro.png" alt="" />
      </div>
      <div className="right">
        <h1>
          Introducing <span>Audeet</span>
        </h1>
        <p>
          The Ultimate Accounting App Coming Soon to Google Play and App store!
        </p>
        <div className="store__icons">
          <img src="./assests/google.png" alt="" />
          <img src="./assests/apple.png" alt="" />
        </div>
      </div>
    </div>
  );
};
