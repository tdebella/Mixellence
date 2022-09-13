import classes from "./hero.module.css";
import { StyledButton } from "../styled-components/styled-components";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={`body-text ${classes.heroContent}`}>
        <div><a href="#"></a></div>
        <p>Excellent hand-crafted drinks for your event</p>
        <StyledButton as="a" href="#" >Book Now</StyledButton>
      </div>
    </div>
  );
};

export default Hero;
