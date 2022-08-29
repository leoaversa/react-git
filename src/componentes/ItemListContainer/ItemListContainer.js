import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


function ItemListContainer(props) {

    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`);
    }
    
    return(
        <>
        <h1>Guitarra {props.greeting}</h1>
        <ItemCount initial={1} stock= {5} onAdd = {onAdd} />
        </>
    );
}

export default ItemListContainer;