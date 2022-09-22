import PlusCircle from '../../assets/Photos/plus-circle-outlined.png'
import classes from './addItem.module.css'

const AddItem = (props) => {
    //props will have the type of item we're adding
    //ex. drink, bartender, testimonial
    //
    let itemType = props.itemType;
    console.log(itemType)
    //The onClick function can open the modal for the section it's in
    //and the modal will have functionality to add to that section.
    const openModal = (itemType) => {
        console.log('modaled ', itemType)
    }
    return (
        <button className={classes.addItem} onClick={()=>openModal(itemType)}>
            <img src={PlusCircle} alt='add item' />
        </button>
    );
};

export default AddItem;