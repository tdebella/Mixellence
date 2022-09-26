import React from "react";
import Router from "../Router/Router";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Drinks from "../Components/Drinks";
import Bartenders from "../Components/Bartenders";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const MainPage = ({ aboutUs, drinks, bartenders, testimonials }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Router />
      <AboutUs aboutUS={aboutUs} />
      <Drinks drinks={drinks} />
      <Bartenders bartenders={bartenders} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default MainPage;
