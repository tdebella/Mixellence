import React from "react";
import classes from "./BartenderLeft.module.css";
import { StyledButton } from "../styled-components/styled-components";

const BartenderLeft = (props) => {
  return (
    <div className={classes.bartenderLeft}>
      <img src={props.bartender.photo} alt="" />
      <h3 className={classes.subTitle}>{props.bartender.name}</h3>
      <p className={classes.text}>{props.bartender.summary}</p>
      <StyledButton as='a' href="#contact" primary>{"Book Now"}</StyledButton>
    </div>
  );
};

export default BartenderLeft;
