import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'
import Gracias from "../Alerts/Gracias";

const Cart = () => {
    const {cart, totalPrice} = UseCartContext();

    if (cart.length === 0) {
        return(
            <>
                <div className="loguito-cart">
                <img alt="logo" src="../cartempty.png"/>
                <p className="carrito-vacio">El carrito está vacío</p>
                </div>

                <Link to='/' className="realizar-compra">
                    
                <Button variant="primary">Realizar compras</Button>
                </Link>
            </>
        ); 
    
}
return(
    <>
    
    {
        cart.map(product => <ItemCart key= {product.id} product={product}/>)
    }
    <div>
    <p className="total-price">
        Total: {totalPrice()}</p>

        <Button onClick={Gracias} variant="primary">Terminar compra</Button>
        
    </div>
        
    </>
    );
}

export default Cart;