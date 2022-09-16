import classes from "./testimonial.module.css";

const Testimonial = ({ info }) => {
  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <img src={require(`../assets/Photos/${info.image}`)} className={classes.avatarImg} alt='avatar' />
      </div>
      <div className="stars">stars
      stars</div>
      <div className={`heading ${classes.name}`}>name</div>
      <div className={`bodyText ${classes.summary}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio purus
        mauris lectus facilisis euismod commodo commodo lectus. Ut nulla nec mi
        id augue amet, bibendum. Risus pharetra rutrum tellus aliquet viverra
        nisl, eu. Lobortis et, faucibus ornare est nunc.
      </div>
    </div>
  );
};

export default Testimonial;
