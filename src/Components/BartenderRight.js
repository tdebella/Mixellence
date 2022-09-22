import React from "react";
import "./BartenderRight.css";
import "./BartenderLeft.css";
import { StyledButton } from "../styled-components/styled-components";

const BartenderRight = (props) => {
  return (
    <div className="bartenderRight">
      <img src={props.bartender.photo} alt="" />
      <h3 className="subTitle">{props.bartender.name}</h3>
      <p className="text">{props.bartender.summary}</p>
      <StyledButton primary>{"Book Now"}</StyledButton>
    </div>
  );
};

export default BartenderRight;
