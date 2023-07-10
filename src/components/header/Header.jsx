import React from "react";
import "./header.scss";
import { East } from "@mui/icons-material";

export const Header = () => {
  return (
    <div className="header">
      <div className="Hleft">
        <div className="Hleft_top">
          <h1>Simplify your Finances, elevate your success</h1>
          <span className="h-ar">
            <East />
          </span>
        </div>
        <div className="Hleft_bottom">
          <p>
            Create custom invoices with payment links and track sales,
            purchases, and expenses.
          </p>
          <button className="header-btn">Try Now</button>
        </div>
      </div>
      <div className="Hright">
        <img src="./assests/grp.png" alt="" />
      </div>
    </div>
  );
};
