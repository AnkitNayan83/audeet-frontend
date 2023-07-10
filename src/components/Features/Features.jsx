import React from "react";
import "./features.scss";
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";

export const Features = () => {
  return (
    <div className="features">
      <div className="F__top">
        <h2>
          Our <span>Features </span>
        </h2>
        <p>
          Our features define who we are and set us apart. Explore our different
          features and manage your accounts effortlessly
        </p>
      </div>
      <div className="F__bottom">
        <div className="left">
          <FeaturesCard
            img={"shopping"}
            head={"Sales ,Purchase & Expense"}
            desc={
              "Users can easily enter and store all their sales and purchase data, such as customer information, product details, prices, and quantities"
            }
          />
          <FeaturesCard
            img={"stopwatch"}
            head={"Auto Reminder for Payment "}
            desc={
              "Automates the process of sending reminders for upcoming or overdue payments via SMS, email, or WhatsApp, making it easier for businesses to collect payments and manage their cash flow."
            }
          />
        </div>
        <div className="right">
          <FeaturesCard
            img={"receipt"}
            head={"Rapid Invoicing"}
            desc={
              "Streamline your billing process with our rapid invoicing feature and customize payment links to get paid faster"
            }
          />
          <FeaturesCard
            img={"barcode"}
            head={"Inventory management"}
            desc={
              "Keep track of the goods and materials that are available for sale."
            }
          />
        </div>
      </div>
    </div>
  );
};
