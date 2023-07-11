import React from "react";
import "./benifits.scss";

export const Benifits = () => {
  return (
    <div className="Benifits">
      <div className="top">
        <h1>
          Benefits of using Online <span>Accounting tool</span>
        </h1>
      </div>
      <div className="bottom">
        <div className="left-cards">
          <div className="bottom__card">
            <img src="./assests/profit.gif" alt="" />
            <h3>Cost Effective</h3>
            <p>
              Eliminate need for physical storage, postage cost associated with
              paper based system
            </p>
          </div>
          <div className="bottom__card">
            <img src="./assests/unlocked.gif" alt="" />
            <h3>Cost Effective</h3>
            <p>
              Eliminate need for physical storage, postage cost associated with
              paper based system
            </p>
          </div>
        </div>
        <img src="./assests/lines.png" alt="" />
        <div className="right-cards">
          <div className="bottom__card">
            <img src="./assests/wait.gif" alt="" />
            <h3>Cost Effective</h3>
            <p>
              Eliminate need for physical storage, postage cost associated with
              paper based system
            </p>
          </div>
          <div className="bottom__card">
            <img src="./assests/document.gif" alt="" />
            <h3>Cost Effective</h3>
            <p>
              Eliminate need for physical storage, postage cost associated with
              paper based system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
