import React from "react";
import "./AboutUs.css";

const AboutUs = ({ text, title }) => {
  return (
    <>
      <div className="about">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </>
  );
};

export default AboutUs;
