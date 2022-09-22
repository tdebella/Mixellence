import BartenderRight from "./BartenderRight";
import BartenderLeft from "./BartenderLeft";

const Bartenders = (props) => {
  let left = true;
  return (
    <div id="bartenders" style={{paddingLeft: "100px", paddingRight: "100px"}}>
      <h1 className="title">GET TO KNOW YOUR BARTENDERS</h1>
      {props.bartenders.map((bartender) => {
        if (left) {
          left = !left;
          return <BartenderLeft bartender={bartender} />;
        } else {
          left = !left;
          return <BartenderRight bartender={bartender} />;
        }
      })}
    </div>
  );
};

export default Bartenders;
