import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Drinks from "../Components/Drinks";
import Bartenders from "../Components/Bartenders";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { firebaseContent } from '../redux/actions/content-actions'

const MainPage = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.content.content) //get redux content state for sending into components
  const aboutUs = state.aboutUs
  const bartenders = state.bartenders
  const drinks = state.drinks
  const testimonials = state.testimonials

  useEffect(() => {
    //get all the content from firestore database for each section
    dispatch(firebaseContent())
  }, [dispatch]);

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
