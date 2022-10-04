import classes from "./testimonial.module.css";
import star from "../assets/Photos/star.png";

const Testimonial = ({ info }) => {
  //This is to put the five star rating in a testimonial without having a bunch of <img> tags in the return statement.
  const starRating = (
    <>
      <img src={star} /> <img src={star} /> <img src={star} />{" "}
      <img src={star} /> <img src={star} />{" "}
    </>
  );
  let image = info.photo;
  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <img src={image} className={classes.avatarImg} alt="avatar" />
      </div>
      <div className="stars">{starRating}</div>
      <div className={`heading ${classes.name}`}>{info.name}</div>
      <div className={`bodyText ${classes.summary}`}>{info.summary}</div>
    </div>
  );
};

export default Testimonial;
