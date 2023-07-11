import React from "react";
import "./whyAudeet.scss";
import { WAcard } from "../WAcard/WAcard";

export const WhyAudeet = () => {
  return (
    <div className="WhyAudeet">
      <div className="WA__top">
        <h1>
          Why to use <span>AUDEET?</span>
        </h1>
      </div>
      <div className="WA__bottom">
        <WAcard
          dir={"left"}
          img={"Group1"}
          title={"Create GST and non GST invoices"}
          desc={
            "Audeet simplifies the process of generating GST and non-GST invoices. Create professional and compliant invoices with ease, incorporating accurate tax calculations based on the GST framework. Whether your products or services fall under the GST regime or not, Audeet ensures your invoices are in line with tax regulations."
          }
        />
        <WAcard
          dir={"right"}
          img={"Group2"}
          title={"Create Delivery Challan"}
          desc={
            "Audeet simplifies your delivery management process by introducing the Delivery Challenge feature. Generate and manage delivery challenges to document the transfer of goods or services to customers. This feature ensures transparency and accountability throughout the delivery process, facilitating effective communication and tracking."
          }
        />
        <WAcard
          dir={"left"}
          img={"Group3"}
          title={"Estimate /Quotations"}
          desc={
            "Create accurate estimates and quotations effortlessly using Audeet. Impress your potential customers with detailed cost breakdowns and pricing information. Customize and share professional estimates and quotations, enhancing your sales process and improving customer satisfaction."
          }
        />
        <WAcard
          dir={"right"}
          img={"Group4"}
          title={"Cashbook, Bankbook,Journals"}
          desc={
            "Audeet provides essential financial books to streamline your record-keeping. The Cashbook allows you to track cash transactions, maintaining accurate cash management records. The Bank Book provides a dedicated space to record and monitor bank account transactions, giving you a comprehensive view of your banking activities. The Journal serves as a central ledger, documenting all financial entries for comprehensive financial reporting."
          }
        />
      </div>
    </div>
  );
};
