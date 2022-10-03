import classes from "../dashboard/updateItem.module.css";
import IMAGE from "../../assets/Photos/plus-circle-outlined.png";

const UpdateItem = () => {
  return (
    // <div className={classes.updateContainer}>
    //   change image, change title, change description
    // </div>
    <div className={classes.container}>
      <div className={classes.modalLeft}>
        <img src={IMAGE} alt="" />
      </div>
      <div className={classes.modalRight}>
        <div className={classes.title}>
          <span>title</span>
        </div>
        <div className={classes.desc}>
          <p>
            <span>Discription</span> <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <button className={classes.btn}>Save</button>
    </div>
  );
};

export default UpdateItem;

// - modal is usually opened based on a user interaction
// - overlay is the entire length + width of the screen!
