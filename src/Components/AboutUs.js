import React from "react";
import AboutUsCSS from "./AboutUs.module.css";
import EditPencilOverlay from "./dashboard/EditPencilOverlay";
import { useSelector } from "react-redux";

const AboutUs = (props) => {
  const loggedIn = useSelector(state => state.auth.loggedIn)

  return (
    <div id="about" className={AboutUsCSS.about}>
      <h1 className={AboutUsCSS.title}>{"about Us"}</h1>
      <div className={AboutUsCSS.container}>
      <p className={AboutUsCSS.text}>
      {loggedIn && <EditPencilOverlay section='about' data={props.aboutUS} />}
      {props.aboutUS}
      </p>
      </div>
    </div>
  );
};

export default AboutUs;
