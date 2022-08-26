import Contador from '../Contador/Contador';
import './ItemListContainer.css';


function Items(props) {
    
    return(
        <>
        <h1>Guitarra {props.greeting}</h1>
        <Contador></Contador>
        </>
    );
}

export default Items;