import classes from "./addItemForm.module.css";
import IMAGE from "../../assets/Photos/plus-circle-outlined.png";

const AddItemForm = () => {
  return (
    <form className={classes.container}>
      <div className={classes.modalLeft}>
        <img src={IMAGE} alt="" />
        <input type='file' />
      </div>
      <div className={classes.modalRight}>
        <input type='text' className={classes.title} placeholder="Name" />
        <textArea className={classes.desc} rows="9" cols="40" placeholder='Type description here'/>
      </div>
      <button className={classes.btn}>Save</button>
    </form>
  );
};

export default AddItemForm;

// - modal is usually opened based on a user interaction
// - overlay is the entire length + width of the screen!
