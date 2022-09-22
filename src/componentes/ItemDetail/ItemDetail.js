import './ItemDetail.css'
import { UseCartContext } from '../../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const ItemDetail = ({data}) => {
    const[gotocart, setGoToCart] = useState(false);
    const {addItem} = UseCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addItem(data, quantity);
    }
    return (
      <div className="tele-container">
        <div className="tele-detail">
          <img className="tele-image" src={data.image} alt="guitarra" />
          <div className="content">
            <h1>{data.title}</h1>
            <div className="price-guitar">
            <h3>{data.description}</h3>
            <h3>${data.price}</h3>
          </div>
            {gotocart ? (
              <>
                <Link to="/cart" className="button-terminar">
                  <Button variant="primary">Terminar compra</Button>
                </Link>
                <Link to="/" className="button-seguir">
                  <Button variant="primary">Seguir comprando</Button>
                </Link>
              </>
            ) : (
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            )}
          </div>
          
        </div>
      </div>
    );};

export default ItemDetail;