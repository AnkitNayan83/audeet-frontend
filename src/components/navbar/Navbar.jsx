import React from "react";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="./assests/logo.png" alt="" />
      </div>
      <div className="right">
        <div className="nav-opt">Home</div>
        <div className="nav-opt">Features</div>
        <div className="nav-opt">About us</div>
        <div className="nav-opt">FAQ</div>
        <div className="nav-opt">Sign up</div>
        <button className="nav-btn">Login</button>
      </div>
    </div>
  );
};
