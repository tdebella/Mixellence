import classes from "../dashboard/AboutModal.module.css";

const AboutModal = () => {
  return (
    <div className={classes.aboutModal}>
      <div className={classes.desc}>
        <p>
          <span>Description</span> <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <button className={classes.btn}>Save</button>
    </div>
  );
};

export default AboutModal;
