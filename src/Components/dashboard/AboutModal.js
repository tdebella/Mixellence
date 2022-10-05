import classes from "../dashboard/AboutModal.module.css";

const AboutModal = (props) => {
  console.log('about modal props' ,props)
  return (
    <div className={classes.aboutModal}>
      <div className={classes.desc}>
        <p>
          {props.data}
        </p>
      </div>
      <button className={classes.btn} onClick={()=>alert('clicked')}>Save</button>
    </div>
  );
};

export default AboutModal;
