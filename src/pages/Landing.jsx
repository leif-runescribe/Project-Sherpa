import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";

const Landing = () => {
  return (
    <div>
        <Layout>
      <Navbar />
      <HeroSection />
      <Features />
      </Layout>
    </div>
  );
};

export default Landing;
