import React, { useState } from "react";
import "./PasswordReset.css";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styled-components/styled-components";

// social icons
import Instagram from "../../assets/Photos/instagram.png";
import Facebook from "../../assets/Photos/facebook.png";
import Twitter from "../../assets/Photos/twitter.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="passwordReset">
        <h1 className="title2">LOGIN</h1>
        <form>
          <div className="wrap2">
            <div className="inputWrapper2">
              <label className="username">Email: </label>
              <input type="text" value={email} onChange={emailHandler} />
            </div>

            <div className="inputWrapper2">
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <StyledButton
              onClick={submitHandler}
              style={{ width: "60px", padding: "0 0px 0 0px", align: "left" }}
            >
              {"Login"}
            </StyledButton>
          </div>
          <div className="text">
            <p className="txt">Forgot Password?</p>
            <p>
              <Link to="/passwordReset" className="link">
                Reset
              </Link>
            </p>
          </div>
        </form>
      </div>
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

export default Login;
