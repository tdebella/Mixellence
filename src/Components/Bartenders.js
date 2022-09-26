import bartendersCSS from "./Bartenders.module.css";
import BartenderLeft from "./BartenderLeft";
import BartenderRight from "./BartenderRight";

const Bartenders = (props) => {
  let left = true;
  return (
    <div className={bartendersCSS.container}>
      <div
        id="bartenders"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <h1 className={bartendersCSS.title}>GET TO KNOW YOUR BARTENDERS</h1>
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
    </div>
  );
};

export default Bartenders;
