import React from "react";
import "./AboutUs.css";

const AboutUs = (props) => {
  console.log(props);
  return (
    <div className="about">
      <h1 className="title">{"aboutUs"}</h1>
      <p className="text">{props.aboutUS}</p>
    </div>
  );
};

export default AboutUs;
