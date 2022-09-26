import React from "react";
import classes from "./BartenderLeft.module.css";
import bartenderRightCSS from "./BartenderRight.module.css";
import { StyledButton } from "../styled-components/styled-components";

const BartenderRight = (props) => {
  return (
    <div className={bartenderRightCSS.bartenderRight}>
      <img src={props.bartender.photo} alt="" />
      <h3 className={classes.subTitle}>{props.bartender.name}</h3>
      <p className={classes.text}>{props.bartender.summary}</p>
      <StyledButton primary>{"Book Now"}</StyledButton>
    </div>
  );
};

export default BartenderRight;
