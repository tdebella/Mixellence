import React, { useState } from "react";
import "./PasswordReset.css";
import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "../../styled-components/styled-components";
import { useDispatch } from "react-redux";
import firebaseConfig from "../../firebase-config";
import { authActions } from "../../redux/slices/auth-slice";

// social icons
import Instagram from "../../assets/Photos/instagram.png";
import Facebook from "../../assets/Photos/facebook.png";
import Twitter from "../../assets/Photos/twitter.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiKey = firebaseConfig.apiKey;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          //save token to local storage
          //set redux state to loggedIn
          //and redirect to dashboard page
          //
          localStorage.setItem("token", data.idToken);
          dispatch(authActions.logIn());
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
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
        <h1 className="title">LOGIN</h1>
        <form>
          <div className="wrap">
            <div className="inputWrap">
              <label>Email: </label>
              <input type="text" value={email} onChange={emailHandler} />
            </div>

            <div className="inputWrap">
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
              className="btn"
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
