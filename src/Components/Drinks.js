import './drinks.css'
import DrinkCard from './DrinkCard';

const Drinks = ({drinks}) => {
    const drink_info = [
        {
            name: 'paloma',
            imgUrl: 'drinks-paloma.jpeg',
            info: "Main alcohol: Tequila Ingredients: 1 oz Cointreau, 1 oz Lime juice, 2oz Tequila Preparation: Rub the rim of the glass with the lime sliceto make the salt stick to it. Shake the other ingredients with ice then carefully pour into the glass. Garnish and serve over ice.Served: On the rocks; poured over ice Standard garnish: Lime slice,Salted rim Drinkware: Margarita glass"
        },
        {   
            name: 'margarita',
            imgUrl: 'drinks-margarita.jpeg',
            info: "Main alcohol: Tequila Ingredients: 1 oz Cointreau, 1 oz Lime juice, 2oz Tequila Preparation: Rub the rim of the glass with the lime sliceto make the salt stick to it. Shake the other ingredients with ice then carefully pour into the glass. Garnish and serve over ice.Served: On the rocks; poured over ice Standard garnish: Lime slice,Salted rim Drinkware: Margarita glass"
        },
     
        {
            name: 'michelada',
            imgUrl: 'drinks-michelada.jpeg',
            info: "Main alcohol: Tequila Ingredients: 1 oz Cointreau, 1 oz Lime juice, 2oz Tequila Preparation: Rub the rim of the glass with the lime sliceto make the salt stick to it. Shake the other ingredients with ice then carefully pour into the glass. Garnish and serve over ice.Served: On the rocks; poured over ice Standard garnish: Lime slice,Salted rim Drinkware: Margarita glass"
        }
    ]
    return (
        <div className='drinks'>
           {console.log('drinks ', drinks)}
            <h2 className='heading sectionTitle'>Drinks</h2>
            <div className='cardContainer'>
            {
                drinks.map(drink => <DrinkCard drink={drink} />)
            }
            </div>
        </div>
    );
};

export default Drinks;