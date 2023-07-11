import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.scss";
import { Header } from "../../components/header/Header";
import { Features } from "../../components/Features/Features";
import { WhyAudeet } from "../../components/whyAudeet/WhyAudeet";
import { Aboutus } from "../../components/AboutUs/Aboutus";
import { Benifits } from "../../components/Benifits/Benifits";
import { Intro } from "../../components/Introduction/Intro";
import { FAQ } from "../../components/FAQ/FAQ";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Features />
      <WhyAudeet />
      <Aboutus />
      <Benifits />
      <Intro />
      <FAQ />
    </div>
  );
};
