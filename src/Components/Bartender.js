import React from "react";
import "./Bartender.css";
import { StyledButton } from "../styled-components/styled-components";

const Bartender = (props) => {
  return (
    <div className="bartenderWrapper">
      <h2 className="img">{props.bartender.photo}</h2>
      <h3 className="subTitle">{props.bartender.name}</h3>
      <p className="text">{props.bartender.summary}</p>
      <StyledButton>{"Book Now"}</StyledButton>
    </div>
  );
};

export default Bartender;
