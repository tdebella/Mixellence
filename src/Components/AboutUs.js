import React from "react";
import AboutUsCSS from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <div id="about" className={AboutUsCSS.about}>
      <h1 className={AboutUsCSS.title}>{"aboutUs"}</h1>
      <p className={AboutUsCSS.text}>{props.aboutUS}</p>
    </div>
  );
};

export default AboutUs;
