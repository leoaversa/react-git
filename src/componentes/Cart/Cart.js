import { Link } from "react-router-dom";
import { UseCartContext } from "../../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const {cart, totalPrice} = UseCartContext();

    if (cart.lenght === 0) {
        return(
            <>
                <p>El carrito está vacío</p>
                <Link to='/'>Realizar compra</Link>
            </>
        ); 
    }

return(
    <>
    {
        cart.map(product => <ItemCart key= {product.id} product={product}/>)
    }
    <p>
        Total: {totalPrice()}
    </p>
    </>
    )
}

export default Cart;