import './testimonials.css'
import Testimonial from './Testimonial';

const Testimonials = (props) => {
    let testimonials = props.testimonials;
    return (
        <div className='testimonials'>
            {console.log('testimonials ', props)}
            <h2 className='heading sectionTitle'>Testimonials</h2>
            <div className='testimonialCardContainer'>
                {testimonials.map(item => <Testimonial info={item} />)}
            </div>
        </div>
    );
};

export default Testimonials;