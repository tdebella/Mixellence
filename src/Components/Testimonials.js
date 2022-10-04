import "./testimonials.css";
import Testimonial from "./Testimonial";

const Testimonials = (props) => {
  let testimonials = props.testimonials;
  return (
    <div id="testimonials" className="testimonials">
      <h2 className="heading sectionTitle">Testimonials</h2>
      <div className="testimonialCardContainer">
        {testimonials.map((item) => (
          <Testimonial key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
