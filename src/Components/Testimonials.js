import './testimonials.css'
import Testimonial from './Testimonial';
const dummy_info = [
    {
        image: 'aiony-haust-3TLl_97HNJo-unsplash.jpg'
    },
    {
        image: 'albert-dera-ILip77SbmOE-unsplash.jpg'
    },
    {
        image: 'jimmy-fermin-bqe0J0b26RQ-unsplash.jpg'
    }
]
const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h2 className='heading sectionTitle'>Testimonials</h2>
            <div className='testimonialCardContainer'>
                {dummy_info.map(item => <Testimonial info={item} />)}
            </div>
        </div>
    );
};

export default Testimonials;