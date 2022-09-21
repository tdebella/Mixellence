import Bartender from "./Bartender";
// import { StyledButton } from "../styled-components/styled-components";

const Bartenders = (props) => {
  // console.log(props);
  return (
    <div className="wrapper">
      <h1 className="title">GET TO KNOW YOUR BARTENDERS</h1>
      {props.bartenders.map((bartender) => (
        <Bartender bartender={bartender} />
      ))}
    </div>
  );
};

export default Bartenders;
