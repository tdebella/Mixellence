import Hero from "../Hero";
import AboutUs from "../AboutUs";
import Drinks from "../Drinks";
import Bartenders from "../Bartenders";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseContent } from "../../redux/actions/content-actions";
import { ModalBackdrop } from "../../styled-components/styled-components";
import { useState } from "react";
import AddItem from "./AddItem";
import classes from "./dashboard.module.css";
import UpdateItem from "./UpdateItem";
import ReactDOM from "react-dom";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.content.content);
  //get redux content state for sending into components
  const aboutUs = state.aboutUs;
  const bartenders = state.bartenders;
  const drinks = state.drinks;
  const testimonials = state.testimonials;

  useEffect(() => {
    //change body element overflow to hidden to prevent scrolling when the modal is showing
    //and change it back to normal (visible) when the modal closes
    //
    if (showModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [showModal]);

  useEffect(() => {
    //get all the content from firestore database for each section
    dispatch(firebaseContent());
  }, [dispatch]);

  return (
    <div className={classes.dashboardContainer}>
      {showModal &&
        ReactDOM.createPortal(
          <ModalBackdrop onClick={() => setShowModal(false)} />,
          document.getElementById("modalBackdrop")
        )}
      {showModal &&
        ReactDOM.createPortal(
          <UpdateItem />,
          document.getElementById("modalContent")
        )}
      <Hero />
      <AboutUs aboutUS={aboutUs} />
      <Drinks drinks={drinks} />
      <AddItem onClick={() => setShowModal(true)} />
      <Bartenders bartenders={bartenders} />
      <AddItem onClick={() => setShowModal(true)} />
      <Testimonials testimonials={testimonials} />
      <AddItem onClick={() => setShowModal(true)} />
      <Footer />
    </div>
  );
};

export default Dashboard;
