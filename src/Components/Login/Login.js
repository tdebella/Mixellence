import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styled-components/styled-components";

// social icons
import Instagram from "../../assets/Photos/instagram.png";
import Facebook from "../../assets/Photos/facebook.png";
import Twitter from "../../assets/Photos/twitter.png";

const Login = () => {
  return (
    <div className="wrapper">
      <div className={classes.login}>
        <form>
          <h1>LOGIN</h1> <br /> <br />
          <label>
            Username:
            <input className={classes.inputWrap} type="text" />
          </label>
          <br />
          <label>
            Password:
            <input className={classes.inputWrap} type="password" />
          </label>{" "}
          <br />
          <button className={classes.btn}>{"Login"}</button>
          <ul className={classes.textWrap}>
            <li>Forgot Password?</li>
            <li>
              <Link to="/reset" className={classes.reset}>
                Reset
              </Link>
            </li>
          </ul>
        </form>
      </div>{" "}
      <br />
      <div className={classes.social}>
        <div>
          <img className={classes.icon} src={Instagram} alt="icon-instagram" />
        </div>
        <div>
          <img className={classes.icon} src={Facebook} alt="icon-facebook" />
        </div>
        <div>
          <img className={classes.icon} src={Twitter} alt="icon-twitter" />
        </div>
      </div>
    </div>
  );
};

export default Login;
