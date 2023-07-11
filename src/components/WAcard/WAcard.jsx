import React from "react";
import "./waCard.scss";

export const WAcard = ({ dir, img, title, desc }) => {
  return (
    <div className={"WAcard" + (dir === "right" ? " rev" : "")}>
      <div className="WAcard__left">
        <img src={`./assests/${img}.png`} alt="" />
      </div>
      <div className={"WAcard__right" + (dir === "right" ? " pad-r" : "")}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
