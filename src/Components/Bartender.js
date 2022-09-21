import React from "react";
import "./Bartender.css";

const Bartender = (props) => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="img-wrap">
          <h2>{props.bartender.imgsrc}</h2>
        </div>
        <div className="txt-wrap">
          <h3 className="subTitle">{props.bartender.subTitle}</h3>
          <p className="text">{props.bartender.text}</p>
          <button className="btn">{props.bartender.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Bartender;
