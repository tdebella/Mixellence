import './drinks.css'
import DrinkCard from './DrinkCard';

const Drinks = ({drinks}) => {
    return (
        <div className='drinks'>
            <h2 className='heading sectionTitle'>Drinks</h2>
            <div className='cardContainer'>
            {
                drinks.map(drink => <DrinkCard key={drink.id} drink={drink} />)
            }
            </div>
        </div>
    );
};

export default Drinks;