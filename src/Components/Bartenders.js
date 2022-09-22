import Bartender from "./Bartender";
import BartenderRight from "./BartenderRight";

const Bartenders = (props) => {
  return (
    <>
      <h1 className="title">GET TO KNOW YOUR BARTENDERS</h1>
      {props.bartenders.map((bartender) => (
        <BartenderRight bartender={bartender} />
      ))}
    </>
  );
};

export default Bartenders;
