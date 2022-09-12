import { Button } from 'react-bootstrap';
import { UseCartContext } from '../../CartContext/CartContext';
import './ItemCart.css';

const ItemCart = ({product}) => {
    const {removeItem} = UseCartContext();
    return(
        <div className='item-cart'>
            
            <img src={product.image} alt={product.title}/>
            <div>
            <h6>Título: {product.title}</h6>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.precio}</p>
            <p>Subtotal ${product.quantity * product.precio}</p>
            <Button onClick={() => removeItem(product.id)} variant="danger">Eliminar</Button>{' '}          
            
                         
        </div>
        </div>
    )
}

export default ItemCart