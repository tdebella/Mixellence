import { useState } from "react";
import "./drinkCard.css";

const DrinkCard = ({ drink }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip((prev) => !prev)}
    >
      <div className="front">
        <img
          src={require(`../assets/Photos/${drink.imgUrl}`)}
          alt={drink.name}
        />
      </div>
      <div className="back">
        <h3 className="heading">{drink.name}</h3>
        <p className="bodyText">
          {drink.info}
        </p>
      </div>
    </div>
  );
};

export default DrinkCard;
