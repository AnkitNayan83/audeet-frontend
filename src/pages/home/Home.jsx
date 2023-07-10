import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.scss";
import { Header } from "../../components/header/Header";
import { Features } from "../../components/Features/Features";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Features />
    </div>
  );
};
