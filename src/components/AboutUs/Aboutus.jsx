import React from "react";
import "./aboutus.scss";

export const Aboutus = () => {
  return (
    <div className="aboutUs">
      <div className="left">
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          Welcome to <span>Audeet</span>, the ultimate accounting app that
          revolutionizes the way you manage your sales, purchases, expenses,
          estimates, quotations, and invoices. Our intuitive and powerful
          platform is designed to simplify your tasks and streamline your
          financial operations, saving you time, effort, and stress.
        </p>
        <p>
          AUDEET is an all-in-one accounting app designed for managing sales,
          purchases, expenses, estimates, quotations, and generating invoices.
        </p>
        <button>Try Now</button>
      </div>
      <div className="right">
        <img src="./assests/aboutUs.png" alt="" />
      </div>
    </div>
  );
};
