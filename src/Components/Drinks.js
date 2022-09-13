import './drinks.css'
import DrinkCard from './DrinkCard';
const Drinks = () => {
    const drink_info = [
        {
            name: 'paloma',
            imgUrl: 'drinks-paloma.jpeg'
        },
        {   
            name: 'margarita',
            imgUrl: 'drinks-margarita.jpeg'
        },
     
        {
            name: 'michelada',
            imgUrl: 'drinks-michelada.jpeg'
        }
    ]
    return (
        <div className='drinks'>
           
            Cards
            {
                drink_info.map(drink => <DrinkCard drink={drink} />)
            }
        </div>
    );
};

export default Drinks;