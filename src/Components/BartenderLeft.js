import React from "react";
import "./BartenderLeft.css";
import { StyledButton } from "../styled-components/styled-components";

const BartenderLeft = (props) => {
  return (
    <div className="bartenderLeft">
      <img src={props.bartender.photo} alt="" />
      <h3 className="subTitle">{props.bartender.name}</h3>
      <p className="text">{props.bartender.summary}</p>
      <StyledButton primary>{"Book Now"}</StyledButton>
    </div>
  );
};

export default BartenderLeft;
