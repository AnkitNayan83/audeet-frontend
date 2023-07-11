import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./faq.scss";

export const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="left">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
        <div className="accordian">
          <Accordion className="acc-child">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                1. What is Audeet and how can it benefit my business?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Audeet is a comprehensive accounting app designed to streamline
                your financial management processes. It offers features such as
                GST and non-GST invoices, payment tracking, purchase and
                delivery challans, bankbook, cashbook, journal entry, inventory
                management, and party management. By using Audeet, you can
                easily track your business transactions, maintain accurate
                financial records, and gain insights into your business's
                financial health.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="acc-child"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                2. How does Audeet handle GST and non-GST invoices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Audeet simplifies the process of generating invoices by
                providing options for both GST and non-GST invoices. Whether you
                need to create invoices with GST-compliant details or for
                non-GST transactions, Audeet offers customizable templates to
                meet your specific invoicing requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="acc-child"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                3. Can Audeet track payments made and received?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! Audeet allows you to efficiently record both
                incoming and outgoing payments. You can easily track payments
                made by your business to vendors or suppliers, as well as
                payments received from customers. This feature provides a clear
                overview of your cash flow and helps you maintain accurate
                financial records.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="acc-child"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>
                4. Does Audeet offer bankbook and cashbook management?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, Audeet includes bankbook and cashbook management features.
                You can easily record and reconcile transactions related to your
                bank accounts and cash holdings. Audeet allows you to maintain
                an organized record of your financial activities, ensuring
                accurate bookkeeping and simplified financial management.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="acc-child"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>
                5. What is the Journal Entry feature in Audeet?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Audeet's Journal Entry feature allows you to record detailed
                financial transactions, ensuring comprehensive bookkeeping. You
                can effortlessly document debit and credit entries, making it
                easier to maintain accurate financial records, reconcile
                accounts, and generate financial statements. The Journal Entry
                feature provides a central hub for all your financial entries.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="acc-child"
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>6. Is my data secure with Audeet?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Audeet takes data security seriously. We implement
                industry-standard security measures to protect your sensitive
                financial information. All data transmitted and stored within
                the app is encrypted, and we follow best practices to ensure
                your data remains secure and confidential.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="right">
        <img src="./assests/FAQ.gif" alt="" />
      </div>
    </div>
  );
};
