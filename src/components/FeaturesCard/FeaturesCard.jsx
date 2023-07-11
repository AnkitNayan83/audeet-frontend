import React from "react";
import "./featuresCard.scss";

export const FeaturesCard = ({ img, desc, head }) => {
  return (
    <div className="FeaturesCard">
      <img src={`./assests/${img}.gif`} alt="" />
      <h2>{head}</h2>
      <p>{desc}</p>
    </div>
  );
};
