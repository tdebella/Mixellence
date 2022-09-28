import React from "react";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { aboutRef, barRef, drinksRef, testRef } from "../firebase-db";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Drinks from "../Components/Drinks";
import Bartenders from "../Components/Bartenders";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const MainPage = () => {
  const [aboutUs, setAboutUs] = useState("");
  const [bartenders, setBartenders] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //get all the content from firestore database for each section
    let aboutContent = [];

    getDocs(aboutRef).then((res) => {
      res.docs.forEach((docs) => {
        aboutContent.push({ ...docs.data() });
      });
      setAboutUs(aboutContent[0].summary);
    });

    let bartenderContent = [];

    getDocs(barRef).then((res) => {
      res.docs.forEach((item) => {
        bartenderContent.push({ ...item.data(), id: item.id });
      });
      setBartenders(bartenderContent);
    });

    let drinksContent = [];
    getDocs(drinksRef).then((res) => {
      res.docs.forEach((item) => {
        drinksContent.push({ ...item.data(), id: item.id });
      });
      setDrinks(drinksContent);
    });
    let testimonialsContent = [];
    getDocs(testRef).then((res) => {
      res.docs.forEach((item) => {
        testimonialsContent.push({ ...item.data(), id: item.id });
      });
      setTestimonials(testimonialsContent);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs aboutUS={aboutUs} />
      <Drinks drinks={drinks} />
      <Bartenders bartenders={bartenders} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default MainPage;
