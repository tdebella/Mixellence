import React, { useState } from "react";
import "./PasswordReset.css";
import { StyledButton } from "../../styled-components/styled-components";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// social icons
import Instagram from "../../assets/Photos/instagram.png";
import Facebook from "../../assets/Photos/facebook.png";
import Twitter from "../../assets/Photos/twitter.png";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [reEnterEmail, setReEnterEmail] = useState("");

  const auth = getAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("something else!");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        console.log("no");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // console.log(email);
    // console.log(reEnterEmail);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const ReEnterEmailHandler = (e) => {
    setReEnterEmail(e.target.value);
  };

  return (
    <>
      <div className="passwordReset">
        <h1 className="title2">PASSWORD RESET</h1>
        <form>
          <div className="wrap2">
            <div className="inputWrapper2">
              <label className="email">Email: </label>
              <input type="text" value={email} onChange={emailHandler} />
            </div>
            <div className="inputWrapper2">
              <label>Re-enter Email: </label>
              <input
                type="text"
                value={reEnterEmail}
                onChange={ReEnterEmailHandler}
              />
            </div>
            <StyledButton
              onClick={submitHandler}
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
