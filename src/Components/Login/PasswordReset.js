import React from "react";
import classes from "./PasswordReset.module.css";

const PasswordReset = () => {
  return (
    <>
      <div className={classes.passwordReset}>
        <form>
          <h1 className={classes.title}>PASSWORD RESET</h1> <br /> <br />
          <label>
            Email:
            <input className={classes.wrap} type="text" />
          </label>
          <br />
          <label>
            Re-enter Email:
            <input className={classes.wrap} type="password" />
          </label>
          <br />
          <button className={classes.btn}>{"Send"}</button>
        </form>
      </div>
    </>
  );
};

export default PasswordReset;
