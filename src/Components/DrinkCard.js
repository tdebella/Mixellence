import { useState } from "react";
import "./drinkCard.css";
import EditPencilOverlay from "./dashboard/EditPencilOverlay";
import { useSelector } from "react-redux";

const DrinkCard = ({ drink }) => {
  //flip is used to set if we see the front or back of the drink card
  const [flip, setFlip] = useState(false);
  const loggedIn = useSelector(state => state.auth.loggedIn)

  let image = drink.photo.toString();
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip((prev) => !prev)}
    >
            {loggedIn && <EditPencilOverlay section='drinks' data={drink} />}

      <div className="front">
        <img src={`${image}`} alt={drink.name} />
      </div>
      <div className="back">
        <h3 className="heading">{drink.name}</h3>
        <p className="bodyText">{drink.summary}</p>
      </div>
    </div>
  );
};

export default DrinkCard;
