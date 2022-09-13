import { useState } from 'react';
import './drinks.css'
const DrinkCard = ({drink}) => {
    const [flip, setFlip] = useState(false)
    
    return (
        
            <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(prev=>!prev)}>
            
                    <div className='front'>
                    <img src={require(`../assets/Photos/${drink.imgUrl}`)} alt={drink.name} />
                    </div>
                    <div className='back'>
                        <h3>{drink.name}</h3>
                        <p className='bodyText'>Main alcohol: Tequila
Ingredients: 1 oz Cointreau, 1 oz Lime
juice, 2 oz Tequila
Preparation: Rub the rim of the glass
with the lime slice to make the salt
stick to it. Shake the other ingredients
with ice, then carefully pour into the
glass. Garnish and serve over ice.
Served: On the rocks; poured over ice
Standard garnish: Lime slice, Salted rim
Drinkware: Margarita glass</p>
                    </div>
            
            </div>
     
    );
};

export default DrinkCard;