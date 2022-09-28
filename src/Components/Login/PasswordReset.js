import React from "react";
import "./PasswordReset.css";
import { StyledButton } from "../../styled-components/styled-components";

// social icons
import Instagram from "../../assets/Photos/instagram.png";
import Facebook from "../../assets/Photos/facebook.png";
import Twitter from "../../assets/Photos/twitter.png";

const PasswordReset = () => {
  return (
    <>
      <div className="passwordReset">
        <h1 className="title2">PASSWORD RESET</h1>
        <form>
          <div className="wrap2">
            <div className="inputWrapper2">
              <label className="email">Email: </label>
              <input type="text" />
            </div>
            <div className="inputWrapper2">
              <label>Re-enter Email: </label>
              <input type="text" />
            </div>
            <StyledButton
              style={{ width: "60px", padding: "0 0px 0 0px", align: "left" }}
            >
              {"Send"}
            </StyledButton>
          </div>
        </form>
      </div>{" "}
      <br /> <br />
      <div className="social">
        <div>
          <img className="icon" src={Instagram} alt="icon-instagram" />
        </div>
        <div>
          <img className="icon" src={Facebook} alt="icon-facebook" />
        </div>
        <div>
          <img className="icon" src={Twitter} alt="icon-twitter" />
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
