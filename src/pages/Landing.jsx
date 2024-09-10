import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import CardContainer from "../components/FeaturesComponents";

const Landing = () => {
  return (
    <div>
        <Layout>
      
      <HeroSection />
      <Features />
     
      <JoinUs/>
      <Footer/>
      </Layout>
      
    </div>
  );
};

export default Landing;
