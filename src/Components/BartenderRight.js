import React from "react";
import classes from "./BartenderLeft.module.css";
import bartenderRightCSS from "./BartenderRight.module.css";
import { StyledButton } from "../styled-components/styled-components";
import EditPencilOverlay from "./dashboard/EditPencilOverlay";
import { useSelector } from "react-redux";

const BartenderRight = (props) => {
  const loggedIn = useSelector(state => state.auth.loggedIn)
  let info = props.bartender
  return (
    <div className={bartenderRightCSS.bartenderRight}>
       {loggedIn && <EditPencilOverlay section='bartenders' data={info} />}
      <img src={props.bartender.photo} alt="" />
      <h3 className={classes.subTitle}>{props.bartender.name}</h3>
      <p className={classes.text}>{props.bartender.summary}</p>
      <StyledButton as='a' href="#contact" primary>{"Book Now"}</StyledButton>
    </div>
  );
};

export default BartenderRight;
