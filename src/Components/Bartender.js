import React from "react";
import classes from "./Bartender.module.css";
import { StyledButton } from "../styled-components/styled-components";

const Bartender = (props) => {
  return (
    <div className={classes.bartenderWrapper}>
      <h2 className={classes.img}>{props.bartender.photo}</h2>
      <h3 className={classes.subTitle}>{props.bartender.name}</h3>
      <p className={classes.text}>{props.bartender.summary}</p>
      <StyledButton>{"Book Now"}</StyledButton>
    </div>
  );
};

export default Bartender;
