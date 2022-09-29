import classes from "./hero.module.css";
import { StyledButton } from "../styled-components/styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn)
  return (
    <div className={classes.hero}>
      <div className={`body-text ${classes.heroContent}`}>
        <div>
        {!loggedIn && <Link to="/login" className="dashboardLink"></Link>}        </div>
        <p>Excellent hand-crafted drinks for your event</p>
        <StyledButton as="a" href="#">
          Book Now
        </StyledButton>
      </div>
    </div>
  );
};

export default Hero;
