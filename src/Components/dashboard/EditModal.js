import classes from "../dashboard/updateItem.module.css";
import IMAGE from "../../assets/Photos/plus-circle-outlined.png";

const editModal = () => {
  return (
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
            <span>Description</span> <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="btnWrap">
          <button className={classes.btn}>Save</button> <br />
          <button className={classes.btn}>Delete</button>
      </div>
    </div>
  );
};

export default editModal;
